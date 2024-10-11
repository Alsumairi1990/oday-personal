import { Category } from "@prisma/client";

// In-memory cache structure
let cache: {
  data: Category[] | null;
  timestamp: number | null;
} = {
  data: null,
  timestamp: null,
};

// Cache duration (24 hours in milliseconds)
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function getCategoriesFromCache(): Category[] | null {
  const now = Date.now();
  // Check if cache is still valid
  if (cache.data && cache.timestamp && (now - cache.timestamp) < CACHE_DURATION) {
    console.log("Returning Categorys from cache");
    return cache.data;
  }
  return null; // Cache is stale or doesn't exist
}

export function setCategoriesToCache(data: Category[]): void {
  console.log("Setting Categorys cached data");
  cache.data = data;
  cache.timestamp = Date.now(); // Update the timestamp
}
