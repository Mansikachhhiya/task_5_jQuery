$.fn.fname_function = function(){
  let fname = $('#fname').val();
    let fname_pattern = "[a-zA-Z]{2,30}$";
    let text;
    if (fname.length == "") {
      text = "First Name required"
      $('#p1').text(text);
    }
    else if (!fname.match(fname_pattern)) {

      text = 'Name must only contain alphabets and its length should be between 2 and 30';
      $('#p1').text(text);
    }
}
$.fn.lname_function = function(){
  let lname = $('#lname').val();
    let lname_pattern = "[a-zA-Z]{2,30}$";
    if (lname.length == "") {
      text = "Last Name requried"
      $('#p2').text(text);
    }
    else if (!lname.match(lname_pattern)) {
      let text;
      text = 'Name must only contain alphabets and its length should be between 2 and 30';
      $('#p2').text(text);
    }
}
$.fn.address_function = function(){
  let address = $("#staddress").val();
  let add1_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$";
  if (address.length == "") {
    text = "Address must be requried"
    $('#p3').text(text);
  }
  else if (!address.match(add1_pattren)) {
    let text;
    text = "Please Enter valid Address";
    $('#p3').text(text);
  }
}
$.fn.address2_function = function(){
  let address2 = $("#staddress2").val();
    let add2_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$";
    if (address2.length == "") {
      text = "Address must be requried"
      $('#p4').text(text);
    }
    else if (!address2.match(add2_pattren)) {

      $('#p4').text("Please Enter valid Address");
    }
}
$.fn.city_function = function(){
  let city = $("#city").val();
    let city_pattern = "[a-zA-Z]{2,30}$";
    let text;
    if (city.length == "") {
      $('#p5').text("Please filled city");
    }
    else if (!city.match(city_pattern)) {
      $('#p5').text("Please Enter valid city");
    }
}
$.fn.state_function=function(){
  let state = $("#state").val();
    let state_pattern = "[a-zA-Z]{2,30}$";

    if (state.length == "") {
      $('#p6').text("please filled state");
    }
    else if (!state.match(state_pattern)) {
      $('#p6').text("Please Enter valid city");
    }
}
$.fn.code_function = function(){
  let code = $("#zipcode").val();
  let code_pattern = "^[0-9]{6}$";

  if (code.length == "") {
    $('#p7').text("please filled zipcode");
  }
  else if (!code.match(code_pattern)) {
    $('#p7').text("Please Enter valid state");
  }
}
$.fn.phoneno_function = function(){
  let phoneno = $("#phoneno").val();
    let phoneno_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
    if (phoneno.length == "") {
      $('#p8').text("Phone number must be filled");
    }
    else if (!phoneno.match(phoneno_pattern)) {
      $('#p8').text("Please Enter valid phone number");
    }
}
$.fn.email_function = function(){
  let email = $("#email").val();
  let email_pattren="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/";
  if (email.length == "") {
    $('#p9').text("Email must be filled");
  }
  else if (!email.match(email_pattren)) {
    $('#p9').text("Please Enter valid Email id");
  }
}
$.fn.feedback_function = function(){
  let feedback = $("#feedback").val();

    if (feedback.length == "") {
      $('#p10').text("please filled the feedback");
    }
}
$.fn.suggestion_function = function(){
  let suggestion = $("#suggestion").val();

    if (suggestion.length == "") {
      $('#p11').text("please filled the suugestion");
    }
}
$.fn.gender_function = function(){
  if ($('input[type=radio][name=gender]:checked').length == 0) {
    let text = 'Please choose your gender';
    $('#p12').text(text);
  }
}

$(document).ready(function () {
  $("#fname").blur(function () {
    $.fn.fname_function();
   })
  $("#lname").blur(function () {
     $.fn.lname_function();
  })
  $("#staddress").blur(function () {
    $.fn.address_function();
  })
  $("#staddress2").blur(function () {
    $.fn.address2_function();
  })
  $("#city").blur(function () {
    $.fn.city_function();
  })
  $("#state").blur(function () {
   $.fn.state_function();
  })
  $("#zipcode").blur(function () {
    $.fn.code_function();
  })
  $("#phoneno").blur(function () {
   $.fn.phoneno_function();
  })
  $("#email").blur(function () {
   $.fn.email_function();
  })
  $("#feedback").blur(function () {
    $.fn.feedback_function();

  })
  $("#suggestion").blur(function () {
    $.fn.suggestion_function();

  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.gender_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.fname_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.lname_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.address_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.address2_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.city_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.state_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.code_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.phoneno_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.email_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.feedback_function();
  })
  $("#submit").click(function (event) {
    event.preventDefault();
   $.fn.suggestion_function();
  })




});