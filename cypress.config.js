const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dcsh4z",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
