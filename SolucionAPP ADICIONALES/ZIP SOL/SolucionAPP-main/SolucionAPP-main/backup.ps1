# Script de Backup Automático para SolucionAPP
# Uso: ./backup.ps1

param(
    [string]$BackupName = "SolucionAPP_Backup",
    [string]$ProjectPath = "C:\Users\gonza\OneDrive\Escritorio\SolucionAPP",
    [string]$BackupPath = "C:\Users\gonza\OneDrive\Escritorio\Backups"
)

# Crear carpeta de backups si no existe
if (-not (Test-Path $BackupPath)) {
    New-Item -ItemType Directory -Path $BackupPath -Force | Out-Null
    Write-Host "Carpeta de backups creada: $BackupPath" -ForegroundColor Green
}

# Crear nombre con timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$fullBackupName = "$BackupName`_$timestamp"
$fullBackupPath = Join-Path $BackupPath $fullBackupName

# Crear backup
Write-Host "Creando backup: $fullBackupName" -ForegroundColor Cyan
Copy-Item -Recurse $ProjectPath $fullBackupPath -ErrorAction Stop

Write-Host ""
Write-Host "✅ BACKUP COMPLETADO" -ForegroundColor Green
Write-Host "Ubicación: $fullBackupPath" -ForegroundColor Green
Write-Host ""

# Mostrar backups recientes
Write-Host "Backups disponibles:" -ForegroundColor Yellow
Get-ChildItem -Path $BackupPath -Directory | Sort-Object LastWriteTime -Descending | Select-Object -First 5 | ForEach-Object {
    Write-Host "  • $($_.Name)" -ForegroundColor White
}

Write-Host ""
Write-Host "Tamaño total del backup:" -ForegroundColor Cyan
$size = (Get-ChildItem -Path $fullBackupPath -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "  {0:F2} MB" -f $size -ForegroundColor White
