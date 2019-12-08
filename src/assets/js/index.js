"use strict";

const id_modal = "#myModal";
const modal_side_class = "modal-side",
modal_nav_class = "modal-nav";

function do_modal($incoming_array) {
    $(id_modal + " .modal-title").html($incoming_array.title),
    $(id_modal + " .modal-body").html($incoming_array.body),
    $(id_modal).modal("show")
}

$(document).ready(function ($) {
  $(".j-main-menu").click(function(e) {
        var menu_body = "<ul class='nav-main-items'>" + $(".nav-main-items").html() + "</ul>";
        $(id_modal).addClass(modal_side_class),
        $(id_modal).addClass(modal_nav_class),
        $modal_data = {
            title: "Browse",
            body: menu_body
        },
        do_modal(id_modal, $modal_data)
    })
    $(id_modal).bind("hidden.bs.modal", function(e) {
        $(id_modal).attr("class", "modal fade"),
        $(id_modal + " .modal-body").removeClass("pad-0"),
        $(id_modal + " .modal-body").html("")
    })
});
