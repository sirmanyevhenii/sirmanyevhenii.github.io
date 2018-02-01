'use strict';

console.log('Hello, I wish you a good day');

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.blah')
        .attr('src', e.target.result)
        .css({"width":"100%", "display":"block"});
    };

    reader.readAsDataURL(input.files[0]);
  }
}



$(document).ready(function(){
        
        var validName = false,
            validEmail = false,
            validCity = false,
            validState = false,
            validTextarea = false;


        $("form.form-1").submit(function(event){
            event.preventDefault();

            var name = $("#name-1").val(),
                nameValid = /^[a-zA-Z\s]+$/,
                email = $("#email-1").val(),
                emailValid = /.+@outlook.com|.+@gmail.com/,
                city = $("#city-1").val(),
                state = $("#state-1").val(),
                textarea = $("#textarea-1").val().length;


            if(name == "") {
              $("p.p-name").remove()
              $('<p>', { class: 'p-name', text: '"Name" field are empty!'}).appendTo('.modal-body');
              validName = false;
            } else {
              $("p.p-name").remove()
              validName = true;
            }



            if (nameValid.test($("#name-1").val())) {
              $("p.p-name-valid").remove()
              validName = false;
            } else {
              $("p.p-name-valid").remove()
              $('<p>', { class: 'p-name-valid', text: '"Name" field should contain only letters and spaces.'}).appendTo('.modal-body');
              validName = true;
            }


            if(email == "") {
              $("p.p-email").remove()
              $('<p>', { class: 'p-email', text: '"Email" field are empty!'}).appendTo('.modal-body');
              validEmail = false; 
            } else {
              $("p.p-email").remove()
              validEmail = true;  
            }


            if(emailValid.test($("#email-1").val())) {
              $("p.p-email-valid").remove()
              validEmail = false; 
            } else {
              $("p.p-email-valid").remove()
              $('<p>', { class: 'p-email-valid', text: '"Email" field should contain only emails from gmail.com and outlook.com !'}).appendTo('.modal-body');
              validEmail = true;  
            }


            if(city == "") {
              $("p.p-city").remove()
              $('<p>', { class: 'p-city', text: '"City" field are empty!'}).appendTo('.modal-body');
              validCity = false;
            } else {
              $("p.p-city").remove()
              validCity = true;
            }


            if(state == "") {
              $("p.p-state").remove()
              $('<p>', { class: 'p-state', text: '"State" field are empty!'}).appendTo('.modal-body');
              validState = false; 
            } else {
              $("p.p-state").remove()
              validState = true;  
            }


            if(textarea < 5 || textarea > 300) {
              $("p.textarea").remove()
              $('<p>', { class: 'textarea', text: '"Textarea" field should contain min 5 characters, max 300 characters!'}).appendTo('.modal-body');
              validTextarea = false; 
            } else {
              $("p.textarea").remove()
              validTextarea = true;  
            }


            if(validName == true && validEmail == true && validCity == true && validState == true && validTextarea == true) {
              $("form").unbind('submit').submit();
            } else {
              $('<p>').remove()
            }

        });

    });