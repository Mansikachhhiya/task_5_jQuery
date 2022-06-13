$(document).ready(function () {
    $("#fname").blur(function () {
        let fname = $('#fname').val();
        let fname_pattern = "[a-zA-Z]{2,30}$";
        let text;
        if(fname.length ==""){
            text="First Name required"
            $('#p1').text(text);
        }
        else  if (!fname.match(fname_pattern)) {
           
            text = 'Name must only contain alphabets and its length should be between 2 and 30';
            $('#p1').text(text);
        }

    });
    $("#lname").blur(function () {
        let lname = $('#lname').val();
        let lname_pattern = "[a-zA-Z]{2,30}$";
        if(lname.length ==""){
            text="Last Name requried"
            $('#p2').text(text);
        }
       else if (!lname.match(lname_pattern)) {
            let text;
            text = 'Name must only contain alphabets and its length should be between 2 and 30';
            $('#p2').text(text);
        }

    });
    $("#staddress").blur(function(){
        let address=$("#staddress").val();
        let add1_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$";
        if(address.length==""){
            text="requried"
            $('#p3').text(text);
        }
       else if (!address.match(add1_pattren)) {
            let text;
            text = "Please Enter valid Address";
            $('#p3').text(text);
        }
    })
    $("#staddress2").blur(function(){
        let address2=$("#staddress2").val();
        let add2_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$";
        if(address2.length==""){
            text="requried"
            $('#p4').text(text);
        }
       else if (!address2.match(add2_pattren)) {
            
            $('#p4').text("Please Enter valid Address");
        }
    })
    $("#city").blur(function(){
        let city=$("#city").val();
        let city_pattern="[a-zA-Z]{2,30}$";
        let text;
        if(city.length==""){
            $('#p5').text("Please filled city");
        }
        else if(!city.match(city_pattern)){
            $('#p5').text("Please Enter valid city");
        }
    })
    $("#state").blur(function(){
        let state=$("#state").val();
        let state_pattern="[a-zA-Z]{2,30}$";
    
        if(state.length==""){
            $('#p6').text("please filled state");
        }
        else if(!state.match(state_pattern)){
            $('#p6').text("Please Enter valid city");
        }
    })
    $("#zipcode").blur(function(){
        let code=$("#zipcode").val();
        let code_pattern="^[0-9]{6}$";
    
        if(code.length==""){
            $('#p7').text("please filled zipcode");
        }
        else if(!code.match(code_pattern)){
            $('#p7').text("Please Enter valid state");
        }
    })
    $("#phoneno").blur(function(){
        let phoneno=$("#phoneno").val();
        let phoneno_pattern="\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
        if(phoneno.length==""){
            $('#p8').text("Phone number must be filled");
        }
        else if(!phoneno.match(phoneno_pattern)){
            $('#p8').text("Please Enter valid phone number");
        }
    })
    $("#email").blur(function(){
        let email=$("#email").val();
        let email_pattern ="/^\S+@\S+\.\S+$/";
        if(email.length==""){
            $('#p9').text("Email must be filled");
        }
        else if(!email.match(email_pattern)){
            $('#p9').text("Please Enter valid Email id");
        }
    })
    $("#feedback").blur(function(){
        let feedback=$("#feedback").val();
        
        if(feedback.length==""){
            $('#p10').text("please filled the feedback");
        }
        
    })
    $("#suggestion").blur(function(){
        let suggestion=$("#suggestion").val();
        
        if(suggestion.length==""){
            $('#p11').text("please filled the suugestion");
        }
        
    })
    $("#submit").click(function(event){
        event.preventDefault();  
        if($('input[type=radio][name=gender]:checked').length == 0)
        {
            let text = 'Please c';
            $('#p12').text(text); 
        }
         
        
    })

});