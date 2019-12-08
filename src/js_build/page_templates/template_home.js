const dochead = require("../partials/head");
const navbar_main = require("../partials/navbar_main");
const footer = require("../partials/footer");

function template_home(data){
return `
${dochead(data)}
<body>
${navbar_main(data)}
${data.content.body.map(bodyContent =>`
  ${bodyContent}
`).join('')}
${footer(data)}
</body>

</html>
`}
module.exports = template_home;
