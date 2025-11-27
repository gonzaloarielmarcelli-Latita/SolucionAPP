import { Job, JobStatus, UserPro } from '../types';

export const MOCK_PRO_USER: UserPro = {
  id: 'pro_123',
  name: 'Juan Pérez',
  category: 'Electricista',
  licenseId: 'MAT-9999',
  photoUrl: 'https://picsum.photos/200',
  isApproved: false,
  location: { lat: -34.921, lng: -57.954 }
};

export const MOCK_PROS: UserPro[] = [
  { id: 'pro_1', name: 'Juan Pérez', category: 'Electricista', licenseId: 'MAT-1001', photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200', isApproved: true, location: { lat: -34.921, lng: -57.954 } },
  { id: 'pro_2', name: 'María Garcia', category: 'Plomería', licenseId: 'MAT-2002', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200', isApproved: true, location: { lat: -34.920, lng: -57.953 } },
  { id: 'pro_3', name: 'Carlos Lopez', category: 'Gasista', licenseId: 'MAT-3003', photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d622ca?w=200', isApproved: true, location: { lat: -34.922, lng: -57.955 } },
  { id: 'pro_4', name: 'Ana Martinez', category: 'Pintor', licenseId: 'MAT-4004', photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200', isApproved: true, location: { lat: -34.922, lng: -57.955 } },
  { id: 'pro_5', name: 'Roberto Cerraduras', category: 'Cerrajería 24hs', licenseId: 'MAT-5005', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', isApproved: true, location: { lat: -34.923, lng: -57.956 } },
  { id: 'pro_6', name: 'Fletes Rápidos LP', category: 'Minifletes y Mensajería', licenseId: 'CNRT-6006', photoUrl: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=200', isApproved: true, location: { lat: -34.924, lng: -57.957 } }
];

export const MOCK_JOB: Job = {
  id: 'job_456',
  clientId: 'client_789',
  proId: 'pro_123',
  status: JobStatus.PENDING,
  budget: 5000,
  location: { lat: -34.9214, lng: -57.9545 },
  description: 'Reparación de tablero eléctrico',
  securityCode: '8921'
};

export const updateJobStatus = async (jobId: string, status: JobStatus): Promise<Job> => {
  MOCK_JOB.status = status;
  return MOCK_JOB;
};

export const getCategories = () => [
  { type: 'Plomería', icon: '🔧', label: 'Plomería', keywords: ['agua', 'caño', 'baño', 'inodoro', 'pérdida', 'filtración', 'cocina'] },
  { type: 'Gasista', icon: '🔥', label: 'Gasista', keywords: ['gas', 'estufa', 'horno', 'calefón', 'fuga', 'cocina'] },
  { type: 'Electricista', icon: '⚡', label: 'Electricidad', keywords: ['luz', 'enchufe', 'cable', 'cortocircuito', 'térmica'] },
  { type: 'Cerrajería 24hs', icon: '🔑', label: 'Cerrajería 24hs', keywords: ['llave', 'puerta', 'cerradura', 'traba', 'abrir'] },
  { type: 'Minifletes y Mensajería', icon: '🚚', label: 'Minifletes y Mensajería', keywords: ['mudanza', 'transporte', 'envío', 'paquete'] },
  { type: 'Pintor', icon: '🎨', label: 'Pintura', keywords: ['pared', 'techo', 'humedad', 'color', 'pintar'] },
];

export const getProsByCategory = async (category: string): Promise<UserPro[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
             resolve(MOCK_PROS.filter(p => p.category === category));
        }, 300);
    });
}