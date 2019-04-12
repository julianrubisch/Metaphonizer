const { app, BrowserWindow } = require("electron");
// const path = require("path");

require("http")
  .createServer(function(req, res) {
    res.end("Hello from server started by Electron app!");
  })
  .listen(9000);

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    require("./server");
    // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    win.loadURL("http://localhost:8080");
    win.webContents.openDevTools();
  }
}

app.on("ready", createWindow);
