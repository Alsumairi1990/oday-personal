import { Service, Work } from "@prisma/client";
import { WorksFrontData } from "../../works/utils/WorksFrontData";

// In-memory cache structure
let cache: {
  data: WorksFrontData[] | null;
  timestamp: number | null;
} = {
  data: null,
  timestamp: null,
};

// Cache duration (24 hours in milliseconds)
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function getWorksHomePageCache(): WorksFrontData[] | null {
  const now = Date.now();
  // Check if cache is still valid
  if (cache.data && cache.timestamp && (now - cache.timestamp) < CACHE_DURATION) {
    console.log("Returning Works from cache");
    return cache.data;
  }
  return null; // Cache is stale or doesn't exist
}

export function setWorksHomePageCache(data: WorksFrontData[]): void {
  console.log("Setting Works cached data");
  cache.data = data;
  cache.timestamp = Date.now(); // Update the timestamp
}
