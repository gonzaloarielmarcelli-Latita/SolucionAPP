import { LatLng } from '../types';

declare global {
  interface Navigator {
    readonly geolocation: Geolocation;
  }
}

export const calculateDistance = (loc1: LatLng, loc2: LatLng): number => {
  const R = 6371e3;
  const phi1 = (loc1.lat * Math.PI) / 180;
  const phi2 = (loc2.lat * Math.PI) / 180;
  const deltaPhi = ((loc2.lat - loc1.lat) * Math.PI) / 180;
  const deltaLambda = ((loc2.lng - loc1.lng) * Math.PI) / 180;

  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const isArrived = (currentLoc: LatLng, jobLoc: LatLng, thresholdMeters: number = 150): boolean => {
  const distance = calculateDistance(currentLoc, jobLoc);
  return distance < thresholdMeters;
};

export const getCurrentLocation = (): Promise<LatLng> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("No geolocation"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
      (error) => reject(error)
    );
  });
};