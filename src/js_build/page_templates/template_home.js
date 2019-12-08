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
<script charset="utf-8" src="assets/js/bundle.js?"></script>
//<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
//<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>
`}
module.exports = template_home;
