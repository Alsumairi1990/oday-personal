import { MenuWithAllModels } from "../../setting/left-nav/_utils/MenuWithAllModels";

// Simplified in-memory cache
let cache: { data: Record<number, MenuWithAllModels[]> | null } = {
  data: null,
};

// Function to get cached data
export function getCachedData(): Record<number, MenuWithAllModels[]> | null {
  console.log('Returning cached data');
  return cache.data; // Always return the cached data, no TTL check
}

// Function to set cached data
export function setCachedData(data: Record<number, MenuWithAllModels[]>): void {
  console.log('Setting new cached data');
  cache.data = data; // Set the new cached data
}
