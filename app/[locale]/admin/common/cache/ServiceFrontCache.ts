import { Service } from "@prisma/client";
import { ServiceForFront } from "../../service/utils/ServiceForFront";

// In-memory cache structure
let cache: {
  data: ServiceForFront | null;
  timestamp: number | null;
} = {
  data: null,
  timestamp: null,
};

// Cache duration (24 hours in milliseconds)
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function getServiceFromCache(): ServiceForFront | null {
  const now = Date.now();
  // Check if cache is still valid
  if (cache.data && cache.timestamp && (now - cache.timestamp) < CACHE_DURATION) {
    console.log("Returning service front from cache");
    return cache.data;
  }
  return null; // Cache is stale or doesn't exist
}

export function setServiceToCache(data: ServiceForFront): void {
  console.log("Setting service front cached data");
  cache.data = data;
  cache.timestamp = Date.now(); // Update the timestamp
}
