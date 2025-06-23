# 🧪 Prueba Técnica useTeam – Tablero Kanban Colaborativo en Tiempo Real

## 🎯 Objetivo

Desarrollar una aplicación tipo **Trello** que permita la gestión de tareas mediante un **tablero Kanban**, con soporte para **colaboración en tiempo real**. El sistema debe incluir columnas personalizables, tarjetas movibles y funcionalidad de **drag & drop fluida**, reflejando cambios de múltiples usuarios al instante.

---

## ⚙️ Tecnologías Requeridas

### 🧩 Frontend

- **Next.js** con **TypeScript**.
- **Tailwind CSS v4** para estilos modernos y eficientes.
- Implementación de **drag & drop** para mover tarjetas entre columnas (**React DnD**, **Dnd-kit**, o similar).
- **Sonner** para mostrar **notificaciones tipo toast** ante eventos como creación, edición o movimiento de tarjetas.
- Comunicación en tiempo real con **Socket.io** (WebSocket).
- Manejo de estado global utilizando Zustand.


### 🛠️ Backend

- **NestJS** con soporte para **WebSocket**.
- Arquitectura basada en **inyección de dependencias**, generando recursos con el CLI de Nest.
- **MongoDB** como base de datos para almacenamiento persistente.
- **Prisma ORM** (con configuración específica para MongoDB).

---

## 🔧 Funcionalidades Requeridas

### 🗂️ Gestión de Columnas

- Crear, editar y eliminar columnas dinámicamente.
- Visualización en tiempo real entre múltiples usuarios.

### 📝 Gestión de Tarjetas

- Crear, editar, mover (entre columnas) y eliminar tarjetas.
- Soporte de **drag & drop** fluido e intuitivo.
- Sincronización de acciones en tiempo real entre usuarios conectados.

### 🔄 Tiempo Real

- Sincronización inmediata de cambios en el tablero.
- Las acciones deben reflejarse instantáneamente en todas las sesiones conectadas.

### 🔔 Notificaciones

- Mostrar toasts con **Sonner** para notificar al usuario sobre eventos relevantes:
  - “Columna creada”
  - “Tarjeta movida”
  - “Tarjeta eliminada”, etc.

---

## 🌱 Bonus (Opcional)

- Implementación de pruebas unitarias (Jest u otro framework) tanto en frontend como backend.
- Gestión de errores con feedback visual.
- Documentar API con swagger
---

## 🧠 Evaluación

Durante el desarrollo se evaluará:

- **Pensamiento asincrónico** y manejo de procesos en tiempo real.
- Calidad del **código frontend**: lógica, estructura, estado compartido.
- Arquitectura del backend y uso adecuado de **inyección de dependencias**.
- Gestión y emisión de eventos WebSocket.
- Experiencia de usuario (UX) e interfaz responsiva.

---

## 📌 Recomendaciones

- Enfocate en una buena experiencia de usuario: responsiva, rápida y clara.
- Priorizá un código **limpio, modular y mantenible**.
- Usá el CLI de NestJS para crear módulos, controladores y servicios.
- Asegurate de configurar correctamente el adaptador (prisma schema + provider).
- Comentá las partes complejas para facilitar su comprensión.
- Evitá la sobreingeniería: priorizá lo esencial antes de añadir bonus.

---

¡Buena suerte! 🚀
