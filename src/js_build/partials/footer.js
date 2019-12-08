const vars = require("../vars.js");
const modal = require("./modal.js");

function footer(data){return `
  <footer class="footer container pad-t" role="contentinfo">
      <div class="row">
          <div class="col-xs-12">
              <h5 class="small text-center" style="color:#ccc;">
                  &copy; ${vars.site_name}. All rights reserved.
              </h5>
              <nav class="text-center footer-links hide">

              </nav>
          </div>
      </div>
  </footer>
  ${modal(data)}
    `};

module.exports = footer;
