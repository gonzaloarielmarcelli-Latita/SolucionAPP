# ============================================
# SolucionAPP - Scripts para Android
# ============================================

# SCRIPT 1: COMPILAR Y SINCRONIZAR PARA ANDROID
# Uso: ./build-android.ps1

$env:PATH = "C:\Program Files\nodejs;$env:PATH"
$projectPath = Get-Location

Write-Host "🚀 Iniciando compilación para Android..." -ForegroundColor Green
Write-Host ""

# Step 1: Build web
Write-Host "1️⃣  Compilando React..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en compilación web" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Build web exitoso" -ForegroundColor Green
Write-Host ""

# Step 2: Sync with Android
Write-Host "2️⃣  Sincronizando con Android..." -ForegroundColor Cyan
npx cap sync android
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en sincronización" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Sincronización exitosa" -ForegroundColor Green
Write-Host ""

# Step 3: Open Android Studio
Write-Host "3️⃣  Abriendo Android Studio..." -ForegroundColor Cyan
npx cap open android

Write-Host ""
Write-Host "🎉 ¡Listo! Android Studio se está abriendo." -ForegroundColor Green
Write-Host "Presiona ▶ Run 'app' para ejecutar" -ForegroundColor Yellow
