# 📋 Instrucciones para Subir BunStack a GitHub

## Pasos para crear el repositorio en GitHub:

### 1. Crear Repositorio en GitHub
1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (verde) o **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**

### 2. Configurar el Repositorio
- **Repository name**: `bunstack-website`
- **Description**: `🚀 Página web moderna para BunStack - Desarrollo web en Chile`
- **Visibility**: Public (recomendado) o Private
- **NO** marques "Initialize this repository with a README" (ya tienes uno)
- Haz clic en **"Create repository"**

### 3. Conectar tu repositorio local con GitHub
Copia y ejecuta estos comandos en la terminal (ya en tu directorio del proyecto):

```bash
# Agregar el repositorio remoto (reemplaza 'tu-usuario' con tu nombre de usuario de GitHub)
git remote add origin https://github.com/tu-usuario/bunstack-website.git

# Cambiar el nombre de la rama principal a 'main' (estándar actual)
git branch -M main

# Subir el código a GitHub
git push -u origin main
```

### 4. Ejemplo de comandos completos:
```bash
# Si tu usuario de GitHub es 'miusuario':
git remote add origin https://github.com/miusuario/bunstack-website.git
git branch -M main
git push -u origin main
```

## 🌟 Habilitar GitHub Pages (Hosting Gratuito)

Una vez subido el proyecto:

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"**
3. Scroll hacia abajo hasta **"Pages"**
4. En **"Source"**, selecciona **"Deploy from a branch"**
5. Selecciona **"main"** branch y **"/ (root)"**
6. Haz clic en **"Save"**
7. ¡Tu sitio estará disponible en: `https://tu-usuario.github.io/bunstack-website/`

## 📝 Comandos útiles para futuras actualizaciones:

```bash
# Agregar cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "✨ Descripción de los cambios"

# Subir cambios
git push
```

## 🚀 Próximos Pasos Recomendados:

### 1. Personalizar el README.md
- Agregar captura de pantalla del sitio
- Incluir link de GitHub Pages
- Actualizar información de contacto

### 2. Configurar Dominio Personalizado (Opcional)
- Comprar dominio (ej: bunstack.cl)
- Configurar DNS
- Agregar archivo CNAME al repositorio

### 3. Mejoras Futuras
- Agregar Google Analytics
- Implementar formulario de contacto funcional
- Optimizar SEO
- Agregar más animaciones

## ⚠️ Importante:
- Reemplaza `tu-usuario` con tu nombre de usuario real de GitHub
- Asegúrate de estar en el directorio correcto del proyecto
- Guarda bien la URL de tu repositorio para futuras referencias

## 📞 ¿Necesitas Ayuda?
Si tienes problemas, puedes:
1. Revisar la documentación de GitHub
2. Usar GitHub Desktop (interfaz gráfica)
3. Contactar soporte técnico

¡Tu página web estará online en pocos minutos! 🎉