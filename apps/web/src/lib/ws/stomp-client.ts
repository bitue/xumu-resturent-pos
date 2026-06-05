import { Client, type IFrame } from '@stompjs/stompjs';
import SockJS from 'sockjs-client';

type Listener<T> = (msg: T) => void;

export class StompService {
  private client: Client | null = null;
  private subs = new Map<string, { id: string; cb: Listener<unknown> }>();

  connect(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client = new Client({
        webSocketFactory: () => new SockJS(`${process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:5001'}/ws`),
        connectHeaders: { Authorization: `Bearer ${token}` },
        reconnectDelay: 2000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => resolve(),
        onStompError: (f: IFrame) => reject(new Error(f.headers['message'] ?? 'STOMP error')),
      });
      this.client.activate();
    });
  }

  subscribe<T>(topic: string, cb: Listener<T>): () => void {
    if (!this.client?.connected) {
      console.warn('STOMP not connected yet. Cannot subscribe to', topic);
      // For mock UI purposes, we'll return a no-op function instead of throwing
      return () => {};
    }
    const sub = this.client.subscribe(topic, msg => cb(JSON.parse(msg.body) as T));
    this.subs.set(topic, { id: sub.id, cb: cb as Listener<unknown> });
    return () => { sub.unsubscribe(); this.subs.delete(topic); };
  }

  disconnect() {
    this.client?.deactivate();
    this.subs.clear();
  }
}

export const stomp = new StompService();
