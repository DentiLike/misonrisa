# Mi Sonrisa — by Dentilike

PWA de un solo archivo para pacientes con brackets del consultorio Dentilike (Dr. Miguel Alvarado Avilés). Sin backend — todo corre en el navegador con `localStorage`.

## Qué incluye

- **Bienvenida** para pacientes recién colocados (activada por botón, no automática)
- **Solucionador de urgencias**: 8 escenarios con pasos, WhatsApp directo al Dr. Miguel, y notas de garantía/alergias cuando aplica
- **Guía de cuidados** por tabs: higiene, alimentación, dolor, citas
- **Checklist diario** con racha (streak) guardada en `localStorage`
- **Agendar cita** vía WhatsApp (placeholder hasta integrar calendario automático)
- **Instalable como PWA**: banner + modal con instrucciones según iOS/Android/escritorio
- **Mikes Molares**, avatar con 4 expresiones (default, ok, riendo, asustado) que reaccionan según contexto
- Footer con datos legales: dirección con link a Maps, cédula, permiso COFEPRIS

## Archivos

```
index.html          — toda la app (HTML+CSS+JS)
manifest.json        — metadata de la PWA
sw.js                 — service worker (cache offline)
avatar-dr.png         — avatar base (thumbs up)
avatar-ok.png         — avatar tranquilo/reassurance
avatar-riendo.png     — avatar celebración
avatar-asustado.png   — avatar urgencia seria
logo-misonrisa-icon.png       — ícono (favicon, topbar)
logo-misonrisa-horizontal.png — logo horizontal (uso libre, no está en la app aún)
logo-dentilike-compact.png    — logo Dentilike sin subtítulo (topbar, footer)
logo-dentilike.png             — logo Dentilike completo con subtítulo
favicon.png            — ícono de la app
```

## Convenciones (igual que SmileFlow/SmilePlan)

- Todo en un solo `index.html`, vanilla JS, sin frameworks
- Antes de subir cualquier cambio, validar:
  1. `node --check` sobre el JS extraído
  2. Llaves `{}` del CSS balanceadas
  3. `<div>`/`</div>` balanceados (diferencia = 0)
- Bump de versión en `sw.js` (`CACHE_NAME`) cada vez que cambian assets cacheados

## Deploy a GitHub Pages

1. Crear repo (puede ser privado o público) y subir estos archivos a la raíz o a `/docs`
2. Activar GitHub Pages desde Settings → Pages, apuntando a la rama/carpeta correspondiente
3. Si usas dominio propio, edita el archivo `CNAME` (ya incluido con un valor placeholder — **confírmalo o cámbialo antes de publicar**) y configura el registro CNAME en tu proveedor de DNS apuntando a `<usuario>.github.io`
4. Verifica que cargue por HTTPS antes de compartir el link con pacientes (los navegadores exigen HTTPS para instalar la PWA)

## Pendientes conocidos

- Calendario automático para "Agendar mi cita de control" (por ahora abre WhatsApp con mensaje prellenado)
- `logo-misonrisa-horizontal.png` generado pero no colocado en ninguna pantalla todavía — disponible por si se necesita en el futuro
