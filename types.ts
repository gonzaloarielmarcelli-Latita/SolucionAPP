export enum ProfessionalType {
  PLUMBER = 'Plomería',
  GAS = 'Gasista',
  ELECTRICIAN = 'Electricista',
  PAINTER = 'Pintor',
  LOCKSMITH = 'Cerrajería 24hs',
  FREIGHT = 'Minifletes y Mensajería',
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface UserPro {
  id: string;
  name: string;
  category: string;
  licenseId: string;
  photoUrl: string;
  isApproved: boolean;
  location: LatLng;
}

export enum JobStatus {
  PENDING = 'PENDING',
  ARRIVED = 'ARRIVED',
  COMPLETED = 'COMPLETED',
}

export interface Job {
  id: string;
  clientId: string;
  proId: string;
  status: JobStatus;
  budget: number;
  location: LatLng;
  description: string;
  securityCode: string;
}