#  Atalaya Studio — Landing Page

Landing page profesional para **Atalaya Studio**, enfocada en diseño y desarrollo web.
Este proyecto fue creado como ejercicio práctico de **HTML5 semántico**, **CSS Mobile-First**, **Grid/Flexbox** y **accesibilidad básica**, como parte de una especialización en desarrollo de software.

---

##  Objetivo del proyecto

- Construir una landing page semántica y accesible
- Aplicar enfoque **Mobile-First**
- Usar **Flexbox y Grid** para layout responsive
- Crear un formulario accesible sin JavaScript
- Evaluar accesibilidad y performance con **Lighthouse**

---

##  Tecnologías utilizadas

- **HTML5**
  - Estructura semántica (`header`, `main`, `section`, `article`, `footer`)
  - Formularios accesibles (`label`, `required`, `aria-*`)
- **CSS3**
  - Mobile-First
  - Flexbox
  - CSS Grid
  - Variables CSS
- **Accesibilidad**
  - Skip link
  - Labels asociados
  - Focus visible
- **Herramientas**
  - Google Lighthouse

---

##  Enfoque Mobile-First

El diseño fue desarrollado primero para dispositivos móviles y luego escalado a pantallas más grandes usando media queries:

- 📱 Mobile: layout en una sola columna
- 💻 Tablet (≥768px): grids de 2 columnas
- 🖥️ Desktop (≥1024px): grids de 3 columnas

---

##  Estructura del proyecto



---

##  Formulario de contacto

El formulario incluye:

- Nombre
- Email
- Servicio de interés
- Celular (validado)
- Presupuesto aproximado
- Plazo
- Mensaje
- Checkbox de aceptación

>  El formulario no envía datos a un servidor.
> Al usar `action="#"` se evita el error HTTP 405 y se simula el envío.

---

##  Accesibilidad

Se aplicaron buenas prácticas básicas:

- `label` correctamente asociados
- `required` en campos obligatorios
- `aria-label` y `aria-describedby`
- Skip link para navegación por teclado
- Focus visible para inputs y botones

---

## Lighthouse

Evaluación realizada con Google Lighthouse:

- **Accesibilidad:** ≥ 90
- **Performance:** ≥ 90

*(Los valores pueden variar según el navegador y el entorno)*

---

##  Estado del proyecto

✅ Estructura HTML completa  
✅ CSS responsive (Mobile-First)  
✅ Formulario accesible  
⏳ Sin JavaScript (intencional para esta entrega)

---

## Autor

**David Manuel Carrasco Conde**  
Estudiante de especialización en Desarrollo de Software  

---

##  Licencia

Este proyecto es solo con fines educativos.

