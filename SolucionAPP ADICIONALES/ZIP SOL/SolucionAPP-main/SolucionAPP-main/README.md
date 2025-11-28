# 🔧 SolucionAPP - Plataforma de Servicios Profesionales

Una aplicación moderna y responsive para conectar clientes con profesionales de servicios (plomería, gas, electricidad, pintura, cerrajería, fletes).

## 🌟 Características

- ✅ **Búsqueda de Servicios** - Encuentra profesionales por categoría
- ✅ **Geolocalización** - Ubica profesionales cercanos a tu ubicación
- ✅ **Contacto Directo** - Comunícate por WhatsApp
- ✅ **Perfil de Profesionales** - Información completa con calificaciones
- ✅ **Check-in Geográfico** - Los profesionales confirman su llegada
- ✅ **Sistema de Seguridad** - Verificación de antecedentes
- ✅ **PWA (Progressive Web App)** - Funciona como app en navegador
- ✅ **100% Responsive** - Funciona en móvil, tablet y desktop

## 🚀 Stack Tecnológico

### Frontend
- **React 18.2.0** - Framework UI moderno
- **TypeScript 5.2.2** - Tipado estático
- **Vite 5.4.21** - Build tool rápido
- **Tailwind CSS 3.4.3** - Estilos CSS utilitarios
- **React Router 6.22.3** - Enrutamiento
- **Lucide React** - Iconos SVG

### Mobile
- **Capacitor 6.0.0** - Framework de PWA/Native
- **Android** - Soporte nativo Android

### DevOps
- **Node.js v25.2.1** - Runtime JavaScript
- **npm 11.6.2** - Gestor de paquetes
- **Git** - Control de versiones

## 📦 Instalación

### Requisitos
- Node.js v20+ 
- npm v11+
- Git

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/SolucionAPP.git
cd SolucionAPP

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Visualizar la compilación
npm run preview
```

## 🏗️ Estructura del Proyecto

```
SolucionAPP/
├── components/          # Componentes React
│   ├── LoginScreen.tsx
│   ├── ClientHomeScreen.tsx
│   ├── ServiceListScreen.tsx
│   ├── ProCheckInScreen.tsx
│   ├── SupportFab.tsx
│   └── AdBanner.tsx
├── services/            # Servicios y lógica de negocio
│   ├── dataService.ts
│   └── locationService.ts
├── android/            # Proyecto Capacitor Android
├── public/             # Assets estáticos
├── dist/               # Build de producción
├── App.tsx             # Componente raíz
├── index.tsx           # Punto de entrada
├── types.ts            # Definiciones de tipos TypeScript
├── vite.config.ts      # Config de Vite
├── tsconfig.json       # Config de TypeScript
├── tailwind.config.js  # Config de Tailwind
├── package.json        # Dependencias
└── capacitor.config.ts # Config de Capacitor
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor local en puerto 5173
npm run build            # Compila para producción
npm run preview          # Vista previa de la compilación
npm run type-check       # Verifica tipos TypeScript

# Android
npx cap add android      # Agrega plataforma Android
npx cap sync android     # Sincroniza archivos
npx cap open android     # Abre Android Studio

# Linting (opcional)
npm run lint             # Revisa código
```

## 🌐 Despliegue

La app está lista para desplegar en:
- **Vercel** (recomendado)
- **Firebase Hosting**
- **Netlify**
- **Servidor web personal**

### Desplegar con Vercel

```bash
npm install -g vercel
vercel
```

### Desplegar con Firebase

```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

## 📱 Categorías de Servicios

1. **Plomería** - Reparación de tuberías y grifería
2. **Gas** - Instalación y mantenimiento de sistemas de gas
3. **Electricidad** - Trabajos eléctricos residenciales
4. **Pintura** - Servicios de pintura interior y exterior
5. **Cerrajería** - Cerrajeros profesionales
6. **Fletes** - Transporte y mudanzas

## 🔐 Características de Seguridad

- ✅ Verificación de antecedentes penales
- ✅ Validación de matrículas profesionales
- ✅ Entrevistas personales
- ✅ Código de seguridad OTP
- ✅ Geolocalización verificada

## 📊 API (Mock Data)

Actualmente usa datos simulados. Para producción:

```typescript
// services/dataService.ts
const MOCK_PROS = [...]
const MOCK_JOB = {...}

// Reemplazar con llamadas reales a API
```

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

## 👥 Autor

Desarrollado por: **Tu Nombre**
- Email: tu-email@example.com
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- React by Meta
- Tailwind CSS Community
- Lucide Icons
- Capacitor Team

## 📞 Soporte

Para reportar bugs o solicitar features, abre un issue en GitHub.

---

**Versión:** 1.0.0  
**Última actualización:** 27 de noviembre de 2025  
**Status:** ✅ Producción Ready
