# 📧 Configuración de EmailJS para el Formulario de Contacto

## ¿Qué es EmailJS?
EmailJS es un servicio GRATUITO que permite enviar emails directamente desde JavaScript sin necesidad de un servidor backend. Es 100% confiable y fácil de configurar.

## 🚀 Pasos para Configurar (5-10 minutos)

### 1. Crear cuenta en EmailJS
1. Ve a: https://www.emailjs.com/
2. Click en **"Sign Up"** o **"Get Started"**
3. Crea tu cuenta (puedes usar tu Gmail: bunstackweb@gmail.com)
4. Confirma tu email

### 2. Conectar tu servicio de email
1. Una vez dentro, ve a **"Email Services"** en el menú lateral
2. Click en **"Add New Service"**
3. Selecciona **"Gmail"** (o el proveedor que uses)
4. Sigue las instrucciones para conectar tu cuenta bunstackweb@gmail.com
5. Dale un nombre al servicio (ejemplo: "BunStack Gmail")
6. **IMPORTANTE:** Anota el **Service ID** que aparece (ejemplo: service_abc123) 


### 3. Crear plantilla de email
1. Ve a **"Email Templates"** en el menú lateral
2. Click en **"Create New Template"**
3. Dale un nombre (ejemplo: "Contacto BunStack")
4. Configura la plantilla con este contenido:

**To Email:** bunstackweb@gmail.com

**Subject:** Nuevo contacto desde BunStack.cl

**Content (HTML):**
```html
<h2>Nuevo mensaje desde el formulario de contacto</h2>
<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Teléfono:</strong> {{phone}}</p>
<p><strong>Servicio:</strong> {{service}}</p>
<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>
<hr>
<p><small>Enviado desde www.bunstack.cl</small></p>
```

5. Click en **"Save"**
6. **IMPORTANTE:** Anota el **Template ID** (ejemplo: template_xyz789)

### 4. Obtener tu Public Key
1. Ve a **"Account"** en el menú lateral
2. Ve a la sección **"General"**
3. Encontrarás tu **Public Key** (ejemplo: 2nP3s-A-MWGp2n7Np)
4. **IMPORTANTE:** Anota este código

### 5. Actualizar tu código
Abre el archivo **index.html** y busca esta línea (cerca del final del archivo):

```javascript
emailjs.init('2nP3s-A-MWGp2n7Np'); // Esta es una clave de ejemplo, reemplazar con la tuya
```

**Reemplázala con:**
```javascript
emailjs.init('TU_PUBLIC_KEY_AQUI'); // Pega tu Public Key real
```

Luego abre **script.js** y busca esta línea:

```javascript
emailjs.send('service_bunstack', 'template_bunstack', templateParams)
```

**Reemplázala con:**
```javascript
emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams)
```

### 6. Probar el formulario
1. Guarda todos los archivos
2. Sube los cambios a tu servidor (Vercel/hosting)
3. Visita tu sitio web
4. Llena el formulario y envía un mensaje de prueba
5. Deberías recibir el email en bunstackweb@gmail.com en menos de 1 minuto

## ✅ Verificación

- [ ] Cuenta de EmailJS creada
- [ ] Servicio de Gmail conectado
- [ ] Plantilla de email creada
- [ ] Public Key copiada
- [ ] Service ID copiado
- [ ] Template ID copiado
- [ ] index.html actualizado con Public Key
- [ ] script.js actualizado con Service ID y Template ID
- [ ] Cambios subidos al servidor
- [ ] Formulario probado y funcionando

## 📊 Plan Gratuito de EmailJS
- ✅ 200 emails/mes GRATIS
- ✅ Sin límite de formularios
- ✅ Sin tarjeta de crédito requerida
- ✅ Perfecto para tu sitio web

## ⚠️ Solución de Problemas

### No llegan los emails
1. Verifica que los IDs estén correctos (sin espacios)
2. Revisa la consola del navegador (F12) para ver errores
3. Asegúrate de que tu Gmail esté conectado correctamente en EmailJS
4. Revisa la carpeta de spam

### Error en la consola
1. Verifica que el script de EmailJS esté cargando correctamente
2. Confirma que la Public Key sea válida
3. Revisa que los nombres de los campos coincidan con la plantilla

## 🆘 ¿Necesitas Ayuda?
Si tienes problemas con la configuración, puedes:
1. Ver la documentación oficial: https://www.emailjs.com/docs/
2. Ver tutoriales en YouTube: "EmailJS tutorial español"
3. Contactarme para ayudarte con la configuración

## 🎉 ¡Listo!
Una vez configurado, tu formulario enviará emails directamente a bunstackweb@gmail.com cada vez que un cliente lo complete.

**Nota:** EmailJS es usado por miles de sitios web y es muy confiable. Es la mejor solución sin necesidad de un servidor backend.
