import path from "node:path";
// const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
// Ajusta esta ruta para que apunte a la raíz de tu monorepo (monorepo-turbo)
const monorepoRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// ** Importante **
// En este ejemplo, la documentación asume que sabes qué paquetes de monorepo usa tu app.
// Como todavía no tenemos paquetes compartidos listados, esta parte es un placeholder.
// Cuando crees paquetes como @tu-monorepo/ui, tendrás que añadirlos aquí.
const monorepoPackages = {
	// Ejemplo: '@tu-monorepo/ui': path.resolve(monorepoRoot, 'packages/ui'),
	// Añade tus paquetes compartidos aquí a medida que los crees y uses
};

// 1. Watch all files within the monorepo
// Puedes empezar con el enfoque más amplio (monorepoRoot) y optimizar después
config.watchFolders = [monorepoRoot];
// O si prefieres empezar con el optimizado, usa:
// config.watchFolders = [projectRoot, ...Object.values(monorepoPackages)];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
	path.resolve(projectRoot, "node_modules"),
	path.resolve(monorepoRoot, "node_modules"),
];

// Opcional: Usar extraNodeModules si los symlinks causan problemas
// config.resolver.extraNodeModules = monorepoPackages;

module.exports = config;
