To fix this issue, we must install the peer dependencies.   Check the `package.json` of the third-party library in your `node_modules` folder to identify the missing peer dependencies. Then install them using npm or yarn:

```bash
npm install --save-dev react-native-vector-icons //or yarn add react-native-vector-icons
```

Then, restart your React Native packager.