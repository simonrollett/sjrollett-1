const vars = require("../vars.js");

function modal(data){return `
  <div class="modal fade template" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div class="row justify-content-center">
                <div class="col-12 ">
                    ${data.body}
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-lg btn-light" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn float-right" id="ja-modal-action-btn"></button>
        </div>
      </div>
    </div>
  </div>
`};

module.exports = modal;
