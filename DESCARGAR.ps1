#!/usr/bin/env pwsh
<#
.SYNOPSIS
  Script para descargar y configurar SolucionAPP fácilmente
.DESCRIPTION
  Automatiza la descarga desde GitHub y configuración inicial
.AUTHOR
  SolucionAPP Team
.VERSION
  1.0.0
#>

Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║         DESCARGADOR AUTOMÁTICO - SolucionAPP            ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Verificar si Git está instalado
$gitExists = Get-Command git -ErrorAction SilentlyContinue
$nodeExists = Get-Command node -ErrorAction SilentlyContinue

Write-Host "🔍 Verificando requisitos..." -ForegroundColor Yellow
Write-Host ""

if ($gitExists) {
    Write-Host "✅ Git está instalado" -ForegroundColor Green
} else {
    Write-Host "⚠️  Git NO está instalado (descargando como ZIP)" -ForegroundColor Yellow
}

if ($nodeExists) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js está instalado ($nodeVersion)" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js NO está instalado - REQUIERE INSTALACIÓN" -ForegroundColor Red
    Write-Host "   Descarga desde: https://nodejs.org/ (LTS)" -ForegroundColor Yellow
    Exit 1
}

Write-Host ""
Write-Host "📍 ¿Dónde quieres descargar el proyecto?" -ForegroundColor Cyan
Write-Host ""
Write-Host "  1️⃣  Carpeta actual (default)" -ForegroundColor White
Write-Host "  2️⃣  Personalizada (indicar ruta)" -ForegroundColor White
Write-Host ""

$opcion = Read-Host "Selecciona opción (1 o 2)"

switch ($opcion) {
    "2" {
        $carpeta = Read-Host "Ingresa la ruta completa"
        if (-not (Test-Path $carpeta)) {
            Write-Host "Creando carpeta..." -ForegroundColor Yellow
            New-Item -ItemType Directory -Path $carpeta -Force | Out-Null
        }
        Set-Location $carpeta
    }
    default {
        $carpeta = Get-Location
    }
}

Write-Host ""
Write-Host "📥 Iniciando descarga..." -ForegroundColor Green
Write-Host "   Destino: $carpeta" -ForegroundColor Cyan
Write-Host ""

# Descargar usando Git o ZIP
if ($gitExists) {
    Write-Host "📌 Usando Git Clone (con historial de cambios)" -ForegroundColor Yellow
    git clone https://github.com/gonzaloarielmarcelli-Latita/SolucionAPP.git
    $proyectFolder = "SolucionAPP"
} else {
    Write-Host "📌 Descargando como ZIP (sin Git)" -ForegroundColor Yellow
    
    $zipUrl = "https://github.com/gonzaloarielmarcelli-Latita/SolucionAPP/archive/refs/heads/main.zip"
    $zipPath = Join-Path $carpeta "SolucionAPP_main.zip"
    
    Write-Host "   Descargando desde GitHub..." -ForegroundColor Cyan
    
    try {
        $ProgressPreference = 'SilentlyContinue'
        Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath
        Write-Host "✅ Descarga completada" -ForegroundColor Green
        
        Write-Host "   Descomprimiendo..." -ForegroundColor Cyan
        Expand-Archive -Path $zipPath -DestinationPath $carpeta -Force
        
        # Renombrar carpeta
        $extractedFolder = Join-Path $carpeta "SolucionAPP-main"
        $finalFolder = Join-Path $carpeta "SolucionAPP"
        
        if (Test-Path $extractedFolder) {
            Rename-Item -Path $extractedFolder -NewName "SolucionAPP" -Force
        }
        
        # Eliminar ZIP
        Remove-Item -Path $zipPath -Force
        Write-Host "✅ Descomprimido y listo" -ForegroundColor Green
        
        $proyectFolder = "SolucionAPP"
    }
    catch {
        Write-Host "❌ Error en la descarga: $_" -ForegroundColor Red
        Exit 1
    }
}

Write-Host ""
Write-Host "📦 Instalando dependencias..." -ForegroundColor Cyan
Write-Host "   (Esto puede tardar 2-3 minutos)" -ForegroundColor Yellow
Write-Host ""

Set-Location $proyectFolder

try {
    npm install
    Write-Host ""
    Write-Host "✅ Dependencias instaladas correctamente" -ForegroundColor Green
}
catch {
    Write-Host "❌ Error al instalar dependencias: $_" -ForegroundColor Red
    Exit 1
}

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║            ✅ PROYECTO DESCARGADO Y CONFIGURADO          ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Para iniciar el servidor de desarrollo:" -ForegroundColor Cyan
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host ""

Write-Host "📱 Accede a: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Otros comandos útiles:" -ForegroundColor Cyan
Write-Host "   npm run build      - Compilar para producción" -ForegroundColor White
Write-Host "   npm install        - Instalar dependencias" -ForegroundColor White
Write-Host "   git status         - Ver cambios (si usaste Git)" -ForegroundColor White
Write-Host "   git log --oneline  - Ver historial (si usaste Git)" -ForegroundColor White
Write-Host ""

Write-Host "📖 Para más información:" -ForegroundColor Cyan
Write-Host "   Lee: GUIA_CONTINUAR_DESARROLLO.md" -ForegroundColor White
Write-Host "   Lee: DESCARGAR_PROYECTO.md" -ForegroundColor White
Write-Host ""

Write-Host "¿Deseas iniciar el servidor ahora? (S/N)" -ForegroundColor Cyan
$iniciar = Read-Host

if ($iniciar -eq "S" -or $iniciar -eq "s") {
    Write-Host ""
    Write-Host "🔄 Iniciando npm run dev..." -ForegroundColor Green
    npm run dev
}
else {
    Write-Host ""
    Write-Host "✅ Todo listo. Ejecuta 'npm run dev' cuando quieras comenzar." -ForegroundColor Green
}
