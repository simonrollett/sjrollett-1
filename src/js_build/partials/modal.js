const vars = require("../vars.js");

function modal(data){return `
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="exampleModalLabel">${data.title}</h5>
          <h6 class="modal-subtitle text-center hide" id="myModalSubtitle"></h6>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div id="modal-body-general" class="modal-body">
            <div class="justify-content-center"></div>
        </div>
        <div class="modal-footer">
          <button id="btm-modal-secondary" type="button" class="btn btn-lg btn-light d-none" data-dismiss="modal">Cancel</button>
          <button id="btm-modal-primary" type="button" class="btn float-right d-none"></button>
        </div>
      </div>
    </div>
  </div>
`};

module.exports = modal;
