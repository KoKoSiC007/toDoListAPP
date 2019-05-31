// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery
//= require jquery_ujs
//= require 'icheck'
//= require select2-full
// $(document).ready(function() {
//     $(document).on("click","#submit_link",function() {
//         $('#form_submit_button').click();
//     });
// });
$(document).ready(function() {
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });
    $('#todo_todo_id').select2({
        minimumResultsForSearch: -1
    });
    $("#check").change(function() {
        var form = $(this).closest("#todos");

        form.submit() // if you use the jquery form plugin http://jquery.malsup.com/form/

        //or
    })
});

function show() {
    $("#overlay").show();
    $("#blured").css("filter", 'blur(3px)');
}
function hide() {
    $('#overlay').hide();
    $('#blured').css("filter", '');
}

