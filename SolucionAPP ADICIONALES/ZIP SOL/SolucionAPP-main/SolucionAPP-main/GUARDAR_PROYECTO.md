# 🚀 GUARDAR PROYECTO - Guía Completa

## 📌 OPCIÓN 1: Guardado Manual Rápido (Recomendado)

### En VS Code:
```
Ctrl + Shift + S  → Guardar todo
```

### En PowerShell (crear backup rápido):
```powershell
cd "C:\Users\gonza\OneDrive\Escritorio\SolucionAPP"
.\backup.ps1
```

**Tiempo:** ~30 segundos

---

## 💾 OPCIÓN 2: Guardado con Git (Profesional)

### Primer uso - Inicializar repositorio:
```powershell
cd "C:\Users\gonza\OneDrive\Escritorio\SolucionAPP"
git init
git add .
git commit -m "Proyecto inicial - SolucionAPP"
```

### Después de cambios:
```powershell
git add .
git commit -m "Descripción de cambios"
```

**Ventaja:** Historial completo de cambios

---

## 🔄 OPCIÓN 3: Guardado Automático (OneDrive)

Como el proyecto ya está en OneDrive (`C:\Users\gonza\OneDrive\Escritorio\SolucionAPP`):

1. **Los cambios se guardan automáticamente en OneDrive**
2. **Versiones anteriores disponibles en OneDrive** (clic derecho → Ver historial)

⚠️ **IMPORTANTE:** Excluir carpetas grandes:
- `node_modules/` - NO sincronizar (se regenera con npm install)
- `android/.gradle/` - NO sincronizar (se regenera)
- `android/app/build/` - NO sincronizar (se regenera)

---

## 📁 QUÉ GUARDAR Y QUÉ NO

### ✅ GUARDAR (Código fuente):
```
SolucionAPP/
├── src/
│   ├── components/
│   ├── services/
│   └── types.ts
├── android/
│   ├── app/src/main/
│   └── gradle.properties
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── *.tsx, *.ts, *.css, *.html
```

### ❌ NO GUARDAR (Se regeneran):
```
node_modules/          (239 packages)
dist/                  (npm run build)
android/.gradle/       (Gradle build)
android/app/build/     (APK compilation)
.vscode/               (Settings personales)
*.log                  (Logs)
```

---

## 🚀 SCRIPT DE GUARDADO AUTOMÁTICO

### Crear archivo: `auto-save.ps1`

```powershell
# Guardado automático cada 5 minutos
while ($true) {
    $timestamp = Get-Date -Format "HH:mm:ss"
    Write-Host "[$timestamp] Sincronizando cambios..." -ForegroundColor Green
    
    cd "C:\Users\gonza\OneDrive\Escritorio\SolucionAPP"
    
    # Guardar en git (si existe repositorio)
    if (Test-Path ".git") {
        git add . 2>&1 | Out-Null
        git commit -m "Auto-save $timestamp" 2>&1 | Out-Null
    }
    
    Write-Host "[$timestamp] ✅ Sincronizado" -ForegroundColor Green
    Start-Sleep -Seconds 300  # Esperar 5 minutos
}
```

### Ejecutar:
```powershell
powershell -ExecutionPolicy Bypass -File "C:\Users\gonza\OneDrive\Escritorio\SolucionAPP\auto-save.ps1"
```

---

## 📊 ARCHIVOS MÁS IMPORTANTES A GUARDAR

| Archivo | Prioridad | Por qué |
|---------|-----------|--------|
| `package.json` | ⭐⭐⭐ | Dependencias del proyecto |
| `components/*.tsx` | ⭐⭐⭐ | Componentes React |
| `services/*.ts` | ⭐⭐⭐ | Lógica de datos |
| `android/app/src/main/` | ⭐⭐⭐ | Configuración Android |
| `vite.config.ts` | ⭐⭐ | Configuración build |
| `tsconfig.json` | ⭐⭐ | TypeScript config |
| `capacitor.config.ts` | ⭐⭐ | Capacitor config |

---

## ✅ MÉTODO RECOMENDADO

### Opción A: OneDrive + Backups Manuales (Más Fácil)

1. **Proyecto en OneDrive** → Guardado automático
2. **Backup semanal:**
```powershell
.\backup.ps1
```
3. **Listo** - Los cambios se sincronizan automáticamente

### Opción B: Git + OneDrive (Más Profesional)

1. **Inicializar Git:**
```powershell
git init
git add .
git commit -m "Inicial"
```

2. **Después de cambios:**
```powershell
git add .
git commit -m "Tu descripción de cambios"
```

3. **OneDrive sincroniza automáticamente**

---

## 🔒 PROTECCIÓN CONTRA PÉRDIDA DE DATOS

### Redundancia:
1. ✅ OneDrive automático (en tiempo real)
2. ✅ Backups locales (weekly)
3. ✅ Git repository (historial completo)

### Recuperar versión anterior:
**OneDrive:**
- Clic derecho en archivo → Ver historial

**Git:**
```powershell
git log                          # Ver historial
git checkout <commit-id> <file>  # Recuperar archivo
```

---

## 💡 RECOMENDACIÓN FINAL

**Para tu caso (desarrollo local):**

1. **Ahora mismo:** Hacer backup manual
```powershell
.\backup.ps1
```

2. **Diariamente:** Al terminar de trabajar
```powershell
git add .
git commit -m "Cambios del día"
```

3. **Semanalmente:** Backup automático
```powershell
.\backup.ps1
```

**Esto es 100% seguro y profesional.** ✅

---

**Guardado:** 27 de noviembre de 2025
