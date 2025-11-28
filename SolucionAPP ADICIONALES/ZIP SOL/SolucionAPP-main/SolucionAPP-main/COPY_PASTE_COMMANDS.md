# 🔗 COMANDOS PARA COPIAR Y PEGAR

## 1️⃣ ABRIR ANDROID STUDIO (Copiar y pegar en PowerShell)

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"; npx cap open android
```

## 2️⃣ COMPILAR + SINCRONIZAR + ABRIR (Después de cambios)

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"; npm run build; npx cap sync android; npx cap open android
```

## 3️⃣ SOLO COMPILAR

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"; npm run build
```

## 4️⃣ SOLO SINCRONIZAR

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"; npx cap sync android
```

## 5️⃣ VER APP EN DESARROLLO (Servidor local)

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"; npm run dev
```

Luego abre: **http://localhost:5173**

## 6️⃣ COMPILAR PARA PRODUCCIÓN

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"; cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"; npm run build
```

---

## 🎯 PASOS EN ANDROID STUDIO (Dentro de la app)

### Después de que se abra Android Studio:

**Espera a que termine "Gradle sync"** (verás un mensaje verde "✓ Gradle sync completed")

### Ejecutar en emulador:

1. Haz clic en el dropdown que dice **"No device"** (arriba a la derecha)
2. Selecciona tu emulador
3. Haz clic en el botón **▶ Run 'app'**
   - O presiona: **Shift + F10**

---

## 🆘 SI ALGO FALLA

### Gradle sync falla:

```
Haz clic en "Try Again" o:
File → Sync Now
```

### Emulador no aparece:

```
Tools → Device Manager → + Create Virtual Device
(Selecciona Pixel 6, Android 13+)
```

### App no compila:

```
Build → Clean Project
Build → Rebuild Project
```

---

## 📲 VERIFICAR QUE ANDROID STUDIO ESTÁ INSTALADO

En PowerShell, busca Android Studio:
```powershell
Get-ChildItem -Path "C:\Program Files" -Name -Filter "*Android*" -Directory
Get-ChildItem -Path "C:\Program Files (x86)" -Name -Filter "*Android*" -Directory
```

Si no aparece, descarga desde: https://developer.android.com/studio

---

## ⚡ ATAJO MÁS RÁPIDO

Guarda esto como `run-android.ps1` en tu escritorio:

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
cd "c:\Users\gonza\OneDrive\Escritorio\SolucionAPP"
npm run build
npx cap sync android
npx cap open android
```

Luego en PowerShell solo ejecuta:
```powershell
& "C:\Users\gonza\Desktop\run-android.ps1"
```

---

¡Listo! Ahora solo copia el comando 1️⃣ y pégalo en PowerShell. 🚀
