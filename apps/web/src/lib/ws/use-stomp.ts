'use client';

import { useEffect } from 'react';
import { stomp } from './stomp-client';

export function useStompSubscription<T>(topic: string | null, onMessage: (msg: T) => void) {
  useEffect(() => {
    if (!topic) return;
    const unsub = stomp.subscribe<T>(topic, onMessage);
    return unsub;
  }, [topic, onMessage]);
}
