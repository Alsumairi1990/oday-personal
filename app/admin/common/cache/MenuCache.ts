import { MenuWithAllModels } from "../../setting/left-nav/_utils/MenuWithAllModels";

// cache.ts (a simple in-memory cache)
let cache: { data: Record<number, MenuWithAllModels[]> | null; timestamp: number } = {
    data: null,
    timestamp: 0,
  };
  const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
  
  export function getCachedData(): Record<number, MenuWithAllModels[]> | null {
    console.log('Returning cached data');
    const now = Date.now();
    if (cache.data && (now - cache.timestamp) < CACHE_TTL) {
      return cache.data;
    }
    return null;
  }
  
  export function setCachedData(data: Record<number, MenuWithAllModels[]>): void {
    cache = { data, timestamp: Date.now() };
  }
  