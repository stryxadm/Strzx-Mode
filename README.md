# STRXZ MODE

Remote PC streaming and social desktop application.

## Included
- Electron desktop client for Windows
- Account registration/login with scrypt password hashing and JWT sessions
- Unique STRXZ tags and friend requests
- Presence and WebRTC signaling over Socket.IO
- Incoming session consent and per-session control permissions
- Desktop capture and WebRTC peer connection UI
- Network status, quality profiles and settings
- Companion signaling/auth server with JSON persistence
- NSIS installer build configuration

## Run locally
1. Install Node.js 20 or newer.
2. Open this folder in PowerShell.
3. Run `npm install`.
4. Run `npm start`.

The desktop app starts a local network service on 127.0.0.1:4317 when no remote server is configured.

## Build Windows installer
Run `npm run build`. The installer is written to `release/STRXZ-MODE-Setup-1.0.0.exe`.

## Use with friends over the internet
A shared, publicly reachable STRXZ Network server is required. Deploy the `server` folder to a trusted VPS, set a strong JWT_SECRET, configure HTTPS/WSS behind a reverse proxy, and configure a TURN server (coturn) for networks where direct WebRTC cannot connect. Set the server address in the app's Settings on every computer. Do not expose the development server directly to the public internet.

## Security
- Remote desktop sessions require the host to accept the incoming request.
- Mouse and keyboard permissions are explicit and session-scoped.
- The host can end the session at any time.
- Passwords are never stored in plaintext.
- Do not run the app elevated unless a specific local operation requires it.
- For production, replace JSON storage with PostgreSQL, configure SMTP and TURN, rotate JWT_SECRET, and deploy behind TLS.

## Important deployment configuration
The included account system is functional on the configured server. Password reset codes are logged to the server console when SMTP is not configured. Add an email field and SMTP-backed verification before public production deployment. The app is an initial complete codebase; public multi-user hosting requires deploying the companion server and TURN infrastructure.
