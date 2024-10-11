import { Service } from "@prisma/client";
import { PhaseWithModels } from "../../service/phases/utils/PhaseWithModels";

// In-memory cache structure
let cache: {
  data: PhaseWithModels[] | null;
  timestamp: number | null;
} = {
  data: null,
  timestamp: null,
};

// Cache duration (24 hours in milliseconds)
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function getPhasessFromCache(): PhaseWithModels[] | null {
  const now = Date.now();
  // Check if cache is still valid
  if (cache.data && cache.timestamp && (now - cache.timestamp) < CACHE_DURATION) {
    console.log("Returning Phases from cache");
    return cache.data;
  }
  return null; // Cache is stale or doesn't exist
}

export function setPhasesToCache(data:PhaseWithModels[]): void {
  console.log("Setting Phases cached data");
  cache.data = data;
  cache.timestamp = Date.now(); // Update the timestamp
}
