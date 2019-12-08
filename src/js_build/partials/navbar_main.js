const vars = require("../vars.js");

function navbar(data){return `
  <nav class="nav-main-wrapper">
    <div class="container nav-main">
      <a class="nav-main-logo" href="/">
          <img src="images/brand/sjrollett-2.svg" alt="Simon Rollett logo" class="nav-main-logo-symbol">
      </a>
      <ul class="nav-main-items hidden-xs" role="navigation">
          <li class=""><a href="/download-cv/">CV</a></li>
          <li class=""><a href="/about/contact/">Contact</a></li>
          <li class="""><a href="/about/">About</a></li>
      </ul>
      <ul class="nav-main-items nav-main-store">
          <li class="hidden-sm hidden-md hidden-lg">
              <span class="j-main-menu glyphicon-glyphicon-menu-hamburger font-corp pad fg-black" role="button" aria-haspopup="true">Explore</span>
          </li>
      </ul>
  </div>
</nav>
`};

module.exports = navbar;
