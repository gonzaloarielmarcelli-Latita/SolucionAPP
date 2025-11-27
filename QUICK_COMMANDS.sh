#!/usr/bin/env bash
# ============================================
# SolucionAPP - Quick Commands
# ============================================

# 🚀 ABRIR EN ANDROID STUDIO (Más fácil)
npx cap open android

# 📱 O ABRE MANUALMENTE
# File → Open → C:\Users\gonza\OneDrive\Escritorio\SolucionAPP\android

# 🔨 COMPILAR APK (desde Android Studio UI)
# Build → Build Bundle(s)/APK(s) → Build APK(s)

# 🔨 O DESDE TERMINAL (Gradle)
cd android
gradlew assembleDebug
# APK estará en: app/build/outputs/apk/debug/app-debug.apk

# 📝 SI MODIFICAS CÓDIGO
npm run build              # Recompilar
npx cap sync android      # Sincronizar cambios

# 🧹 LIMPIAR
# En Android Studio: Build → Clean Project → Rebuild Project
