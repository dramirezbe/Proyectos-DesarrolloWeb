# Crear proyecto con React + Vite

**instalar nvm (node y npm)**

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.13.1".
nvm current # Should print "v22.13.1".

# Verify npm version:
npm -v # Should print "10.9.2".
```
**Crear proyecto con Vite**

```bash
npm create vite@latest project-name
```
Elegir: TypeScript + SWC

Entrar al proyecto y luego:
```bash
npm install
```
**Instalar Tipos para Node.js y React**
```bash
npm install @types/node @types/react @types/react-dom -D
```

**Iniciar Proyecto**
```bash
npm run dev
```

