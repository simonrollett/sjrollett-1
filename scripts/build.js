const fs = require("file-system");
const fse = require("fs-extra");
const dirTree = require("directory-tree");

// SETTINGS
const srcPath = './src';
const distPath = './public';
const srcTemplatesDir = '../src/js/page_templates';
const publicTemplatesDir = `${distPath}/`;

// RETURN STRUCTURE OF CONTENT INDEX FILES AS OBJECT
const pageDefinitionsDir = dirTree("./src/js/page_definitions");

// BUILD PAGES
pageDefinitionsDir.children.forEach(fileName => {
      const emailContent = require(`../${fileName.path}`);
      const emailTemplate = require(`${srcTemplatesDir}/${emailContent.config.html_template}`);
      const outputName = fileName.name.replace(".js",".html");
      fs.writeFile(`${publicTemplatesDir}/${outputName}`, emailTemplate(emailContent), function(err) {});
});

// SETUP LOCALHOST DASHBOARD RESOURCES
fse.copy(`${srcPath}/assets`, `${distPath}/assets`);
