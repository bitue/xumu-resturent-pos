import { Client, type IFrame } from '@stomp/stompjs';
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
    if (!this.client) {
      this.connect(''); // Auto-connect with empty token
    }
    
    // STOMP client queues subscriptions if not connected yet, so we can just call subscribe.
    // However, if we do that, we need to make sure we wait for it to be active, or use the STOMP client's internal queue.
    // In @stomp/stompjs, you can call subscribe before connecting, but you have to do it in onConnect or just let the Client handle it.
    // Actually, @stomp/stompjs Client doesn't queue subscriptions before onConnect. We should do it in onConnect.
    if (!this.client?.connected) {
      const originalOnConnect = this.client!.onConnect;
      this.client!.onConnect = (frame) => {
        if (originalOnConnect) originalOnConnect(frame);
        this.subscribe(topic, cb);
      };
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
