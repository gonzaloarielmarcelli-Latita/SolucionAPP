# 🚀 GUÍA: EJECUTAR LA APP EN ANDROID STUDIO

## ✅ Estado Actual
- ✅ Build web compilado (`dist/`)
- ✅ Capacitor sincronizado con Android
- ✅ Android Studio abierto con el proyecto

## 📱 Pasos para Compilar y Ejecutar

### **Opción 1: Usar Android Studio (Recomendado)**

#### Paso 1: Esperar a que Gradle sincronice
Cuando abras Android Studio, verás un mensaje: "Gradle sync in progress..."
- **Espera a que termine** (puede tomar 2-5 minutos la primera vez)
- Verás un mensaje verde: "✓ Gradle sync completed"

#### Paso 2: Seleccionar dispositivo
- En la barra superior, verás un dropdown con "No device"
- Haz clic y selecciona:
  - **Emulador**: Si tienes uno creado (recomendado: Pixel 6, Android 12+)
  - **Dispositivo físico**: Si tienes un Android conectado por USB

#### Paso 3: Compilar y ejecutar
Opción A - Desde el menú:
- `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)`

Opción B - Ejecutar directamente (más rápido):
- Haz clic en el botón **▶ Run 'app'** (o presiona `Shift + F10`)
- La app se compilará y ejecutará automáticamente en el dispositivo/emulador

### **Opción 2: Desde Terminal (Si prefieres línea de comandos)**

```powershell
# Agregar Node.js al PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Ir a la carpeta del proyecto
cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP\android"

# Compilar APK Debug
./gradlew assembleDebug

# El APK estará en:
# app/build/outputs/apk/debug/app-debug.apk
```

## 🔍 ¿Qué verás cuando compile?

### Primera compilación:
- **Descargando Gradle y dependencias** (2-10 minutos)
- Mensaje: "BUILD SUCCESSFUL" al final

### Siguientes compilaciones:
- Mucho más rápido (30-60 segundos)

## ⚠️ Si hay Errores

### Error: "SDK not found"
- Abre `File` → `Project Structure` → `SDK Location`
- Selecciona la carpeta donde descargaste Android SDK
- Por defecto: `C:\Users\[Tu Usuario]\AppData\Local\Android\Sdk`

### Error: "Gradle sync failed"
- `File` → `Sync Now`
- Si persiste: `File` → `Invalidate Caches` → `Invalidate and Restart`

### Error: "No emulator devices found"
- Ve a `Tools` → `Device Manager` → `Create Virtual Device`
- Selecciona "Pixel 6" o "Pixel 5"
- Android 12 o superior (recomendado: Android 13+)

## 📲 Cuando la app se ejecute

Verás:
1. **Pantalla de Login** con:
   - Logo SolucionAPP
   - Botón "Google Sign In"
   - Links de privacidad y términos

2. Luego podrás:
   - Ir a "Cliente" para ver servicios
   - Seleccionar una categoría
   - Ver lista de profesionales
   - Ver detalle del profesional
   - Hacer check-in con ubicación

## 🔄 Si Hiciste Cambios en el Código

Si modificaste React/TypeScript, necesitas:

```powershell
# 1. Compilar la web de nuevo
npm run build

# 2. Sincronizar con Android
npx cap sync android

# 3. En Android Studio:
# Build → Clean Project → Rebuild Project
# O presiona: Shift + F10
```

## 📍 Ruta del Proyecto Android
```
c:\Users\gonza\OneDrive\Escritorio\SolucionAPP\android
```

## 🎯 Configuración de la App

**App ID:** `com.solucionapp.mobile`  
**Nombre:** `SolucionAPP`  
**Plataforma:** Android (iOS está disponible también)

---

**¡Listo! Ahora solo abre Android Studio y presiona ▶ Run 'app'**
