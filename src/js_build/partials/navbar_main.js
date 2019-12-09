const vars = require("../vars.js");

function navbar(data){return `
  <div class="nav-main-wrapper">
    <div class="container">
      <div class="row h-100">
        <div class="col align-self-start my-auto">
          Empty/hidden
        </div>
        <div class="col align-self-center text-center nav-logo-wrapper my-auto">
          <a class="nav-link active" href="#">
            <img class="nav-logo" src="./assets/images/brand/sjrollett-2.svg" alt="Simon Rollett logo" class="nav-main-logo-symbol">
          </a>
        </div>
        <div class="col align-self-end my-auto">
          <nav class="nav nav-links">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <span class="nav-link j-main-menu">Explore</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
`};

module.exports = navbar;
