# VibeCodingPractice React Native Scaffold

This repository contains the foundation for a React Native application. The
current version simply displays `Hello World` and includes a minimal testing
setup using Jest. The project is intended to grow into a more mature
application with internal APIs, a database, and user preference storage.

## Tool Versions
- React `18.2.0`
- React Native `0.73.4`
- Jest `29.6.0`

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the tests:
   ```bash
   npm test
   ```
3. Launch the Expo development server with a web-based emulator:
   ```bash
   npm start
   ```
   This opens Expo DevTools in your browser. Choose the **Web** option to host
   the app in an online emulator. You can also scan the QR code with the Expo Go
   mobile app to view it on a real device.

## File Structure
- `App.js` – entry component rendering `HelloWorld`
- `index.js` – registers the app
- `app.json` – basic app metadata
- `src/components/HelloWorld.js` – simple component displaying the greeting
- `__tests__/App.test.js` – Jest snapshot test

## Notes
The environment used to generate this scaffold does not include downloaded
`node_modules`, so running `npm install` is required before tests will pass.
