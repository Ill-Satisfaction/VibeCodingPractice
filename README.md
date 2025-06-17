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
3. Run the app on your device or emulator using your preferred React Native
   workflow (`npx react-native run-android` or `run-ios`).

## File Structure
- `App.js` – entry component rendering `HelloWorld`
- `index.js` – registers the app
- `app.json` – basic app metadata
- `src/components/HelloWorld.js` – simple component displaying the greeting
- `__tests__/App.test.js` – Jest snapshot test

## Notes
The environment used to generate this scaffold does not include downloaded
`node_modules`, so running `npm install` is required before tests will pass.
