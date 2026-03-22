const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  // ✅ Correct way to load local file
  win.loadFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
}

app.whenReady().then(() => {
  // Start backend inside Electron
  const startServer = require('./backend/server');
  startServer();

  createWindow();
});