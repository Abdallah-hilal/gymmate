// PM2 process config for running the Next.js production server on the VPS.
// Usage on the server:  pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "gymmate-website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "./",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
