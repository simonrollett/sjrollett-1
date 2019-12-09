const dochead = require("../partials/head");
const navbar_main = require("../partials/navbar_main");
const footer = require("../partials/footer");

function template_home(data){
return `
${dochead(data)}
<body>
${navbar_main(data)}
<div class="container">
${data.content.body.map(bodyContent =>`
  ${bodyContent}
`).join('')}
</div>
${footer(data)}
</body>
<script charset="utf-8" src="assets/js/bundle.js?"></script>
</html>
`}
module.exports = template_home;
