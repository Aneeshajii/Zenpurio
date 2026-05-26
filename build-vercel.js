import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log("Starting custom Vercel build...");

// 1. Run standard build
execSync('npm run build:vite', { stdio: 'inherit' });

// 2. Create Vercel output structure
const vercelDir = path.join(process.cwd(), '.vercel', 'output');
const staticDir = path.join(vercelDir, 'static');
const funcDir = path.join(vercelDir, 'functions', 'index.func');

fs.rmSync(vercelDir, { recursive: true, force: true });
fs.mkdirSync(staticDir, { recursive: true });
fs.mkdirSync(funcDir, { recursive: true });

// 3. Copy static files
fs.cpSync(path.join(process.cwd(), 'dist', 'client'), staticDir, { recursive: true });

// 4. Copy server files
fs.cpSync(path.join(process.cwd(), 'dist', 'server'), funcDir, { recursive: true });

// 5. Create Vercel Function config
const vcConfig = {
  runtime: "nodejs18.x",
  handler: "server.js",
  launcherType: "Nodejs"
};
fs.writeFileSync(path.join(funcDir, '.vc-config.json'), JSON.stringify(vcConfig, null, 2));

// 6. Create Vercel Routing config
const config = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/" }
  ]
};
fs.writeFileSync(path.join(vercelDir, 'config.json'), JSON.stringify(config, null, 2));

console.log("Vercel build complete!");
