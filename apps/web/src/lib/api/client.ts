// TEMPORARY: Set to empty string to hit Next.js mock API routes instead of Spring Boot
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? '';

export class ApiError extends Error {
  constructor(public message: string, public status: number, public errors?: unknown) { super(message); }
}

let refreshPromise: Promise<void> | null = null;

async function refresh(): Promise<void> {
  if (refreshPromise) return refreshPromise;
  refreshPromise = fetch(`${API_BASE}/api/auth/refresh`, { method: 'POST', credentials: 'include' })
    .then(r => { if (!r.ok) throw new ApiError('Session expired', 401); })
    .finally(() => { refreshPromise = null; });
  return refreshPromise;
}

export async function apiFetch<T>(path: string, init: RequestInit & { retried?: boolean } = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...init.headers },
  });
  if (res.status === 401 && !init.retried) {
    await refresh();
    return apiFetch<T>(path, { ...init, retried: true });
  }
  
  if (!res.ok) {
    let errBody;
    try { errBody = await res.json(); } catch { /* ignore */ }
    throw new ApiError(errBody?.message || 'Request failed', res.status, errBody);
  }

  // Handle empty responses
  if (res.status === 204) return {} as T;
  
  const body = await res.json().catch(() => ({}));
  if (body?.success === false) {
    throw new ApiError(body?.message || 'Request failed', res.status, body?.errors);
  }
  
  return (body.data !== undefined ? body.data : body) as T;
}
