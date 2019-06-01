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
//= require 'vendor/icheck'
//= require vendor/select2-full
// $(document).ready(function() {
//     $(document).on("click","#submit_link",function() {
//         $('#form_submit_button').click();
//     });
// });
$(document).ready(function() {


    $('#todo_todo_id').select2({
        minimumResultsForSearch: -1
    });


    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%', // optional
    });

    $('input').on('ifChanged', function(event){
        console.log(this.id);
        console.log(this.checked);
        $.ajax({
            type: "put",
            url: "todos/"+ this.id,
            data: this.id,
            success: function(msg){
                alert( "Прибыли данные: " + msg );
            }
        });
    });

});

function show() {
    $("#overlay").show();
    $("#blured").css("filter", 'blur(3px)');
}
function hide() {
    $('#overlay').hide();
    $('#blured').css("filter", '');
}

