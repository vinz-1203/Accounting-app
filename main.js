const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({ width: 1000, height: 800 });
  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  spawn('node', ['backend/server.js'], { shell: true });

  spawn('npm', ['start'], {
    cwd: path.join(__dirname, 'frontend'),
    shell: true,
  });

  setTimeout(createWindow, 8000);
});