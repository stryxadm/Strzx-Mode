const { contextBridge, ipcRenderer } = require('electron');
const { io } = require('socket.io-client');
let socket = null;
contextBridge.exposeInMainWorld('strxz', {
  localServerUrl: () => ipcRenderer.invoke('server:local-url'),
  desktopSources: () => ipcRenderer.invoke('desktop:sources'),
  connectSocket: (url, token) => {
    if (socket) socket.disconnect();
    socket = io(url, { auth: { token }, transports: ['websocket', 'polling'], reconnection: true });
    socket.onAny((event, ...args) => ipcRenderer.send('socket:event', { event, args }));
    return true;
  },
  socketEmit: (event, payload) => { if (socket) socket.emit(event, payload); },
  socketDisconnect: () => { if (socket) socket.disconnect(); socket = null; },
  onSocketEvent: callback => {
    const listener = (_event, data) => callback(data.event, ...(data.args || []));
    ipcRenderer.on('socket:event', listener);
    return () => ipcRenderer.removeListener('socket:event', listener);
  },
  setControlPermissions: p => ipcRenderer.send('control:permissions', p),
  applyRemoteInput: d => ipcRenderer.invoke('control:input', d)
});