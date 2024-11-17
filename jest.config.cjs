module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Apply Babel transformation to .jsx, .ts, .tsx files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // This allows Jest to transform axios and other packages that need it
  ],
  testEnvironment: "jsdom",
};
