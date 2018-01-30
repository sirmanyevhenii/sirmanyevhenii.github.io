'use strict';

console.log('Hello, I wish you a good day');

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result)
        .css({"width":"100%", "display":"block"});
    };

    reader.readAsDataURL(input.files[0]);
  }
}


// $(function() {

//     $("#name").bind("keyup", function(event) {
//         var regex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;

//         $( "p" ).remove();
//         if (regex.test($("#name").val())) {
//             $('.modal-body').append("<p>Name - valid.<p>");
//         } else {
//             $('.modal-body').append("<p>Name - This field should contain only lettetrs!<p>");
//         }
//     });


//     $("#email").bind("keyup", function(event) {
//         var regex = /.+@outlook.com|.+@gmail.com/;

//         $( "p" ).remove();
//         if (regex.test($("#email").val())) {
//             $('.modal-body').html('Email - valid.');
//         } else {
//             $('.modal-body').append("<p>Email - We'll accept only emails from gmail.com and outlook.com!<p>");
//         }
//     });


//     // empty field

//     $("#city").bind("keyup", function(event) {
//         var regex = /^(\w+\S+)$/;
//         if (regex.test($("#city").val())) {
//             $('.modal-body').html('City field are filled.');
//         } else {
//             $('.modal-body').append("<p>City field are empty!<p>");
//         }
//     });







    // $("#name").bind("keyup", function(event) {
    //     var regex = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/;
    //     if (regex.test($("#name").val())) {
    //         $('.modal-body').html('All field are filled.');
    //     } else {
    //         $('.modal-body').append("<p>Name field are empty!<p>");
    //     }
    // });

    // $("#email").bind("keyup", function(event) {
    //     var regex = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/;
    //     if (regex.test($("#email").val())) {
    //         $('.modal-body').html('All field are filled.');
    //     } else {
    //         $('.modal-body').append("<p>Email field are empty!<p>");
    //     }
    // });

    // $("#city").bind("keyup", function(event) {
    //     var regex = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/;
    //     if (regex.test($("#city").val())) {
    //         $('.modal-body').html('All field are filled.');
    //     } else {
    //         $('.modal-body').append("<p>City field are empty!<p>");
    //     }
    // });

    // $("#state").bind("keyup", function(event) {
    //     var regex = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/;
    //     if (regex.test($("#state").val())) {
    //         $('.modal-body').html('All field are filled.');
    //     } else {
    //         $('.modal-body').append("<p>State field are empty!<p>");
    //     }
    // });

    // $("#textarea").bind("keyup", function(event) {
    //     var regex = /^[A-Za-zА-Яа-яЁё]+(\s[A-Za-zА-Яа-яЁё]+)*$/;
    //     if (regex.test($("#textarea").val())) {
    //         $('.modal-body').html('All field are filled.');
    //     } else {
    //         $('.modal-body').append("<p>Issue description field are empty!<p>");
    //     }
    // });


// });