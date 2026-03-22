const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  // Load built React app
  const startUrl = `file://${path.join(__dirname, 'frontend/build/index.html')}`;
  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  // Start backend (NO npm)
  const backendPath = path.join(__dirname, 'backend/server.js');

  spawn('node', [backendPath], {
    shell: true,
  });

  createWindow();
});