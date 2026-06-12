import { headers } from "next/headers";

const buckets = new Map<string, number[]>();

export async function isRateLimited(scope: string, limit = 8, windowMs = 60_000) {
  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || headerStore.get("x-real-ip") || "local";
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const recent = (buckets.get(key) || []).filter((time) => now - time < windowMs);
  if (recent.length >= limit) {
    buckets.set(key, recent);
    return true;
  }
  buckets.set(key, [...recent, now]);
  return false;
}
