const fs1 = require("fs");

const featureFilePath = "./test/features/*.feature";

const screenshotPath = "./reports/screenshots";
if (!fs1.existsSync(screenshotPath)) {
  fs1.mkdirSync(screenshotPath);
}

const uiJSONPath = "./reports/ui";
if (!fs1.existsSync(uiJSONPath)) {
  fs1.mkdirSync(uiJSONPath);
}

module.exports = {
  screenshotPath,
  uiJSONPath,
  featureFilePath,
};
