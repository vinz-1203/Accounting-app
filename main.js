const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  const startUrl = `file://${path.join(__dirname, 'frontend/build/index.html')}`;
  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  // 🔥 Start backend INSIDE Electron
  const startServer = require('./backend/server');
  startServer();

  createWindow();
});