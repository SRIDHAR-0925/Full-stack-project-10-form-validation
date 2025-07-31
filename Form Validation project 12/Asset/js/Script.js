function validateform(event) {

let fname= document.myform.fname.value;
let lname= document.myform.lname.value;
let num=document.myform.num.value;
let alnum=document.myform.alnum.value;
let mail=document.myform.mail.value;
let gender=document.myform.gender.value;
let state=document.myform.state.value; 
let pin_cod=document.myform.pin_cod.value;
let add=document.myform.add.value;
let feedback=document.myform.feedback.value;


let fname_err = document.getElementById("fname_err");
let lname_err = document.getElementById("lname_err");
let num_err = document.getElementById("num_err"); 
let alnum_err = document.getElementById("alnum_err");
let mail_err = document.getElementById("mail_err");
let gender_err = document.getElementById("gender_err");
let state_err = document.getElementById("state_err");
let pin_cod_err = document.getElementById("pin_cod_err");
let add_err = document.getElementById("add_err");
let feedback_err = document.getElementById("feedback_err");

let isValid = true;


if(fname == "" || fname == null){
    fname_err.innerHTML="Enter your first Name...";
    isValid = false;
}
else{
    fname_err.innerHTML="";
}
//
if(lname == "" || lname == null){
    lname_err.innerHTML="Enter your last Name...";
    isValid = false;
}
else{
    lname_err.innerHTML="";
}
// 
if(num == "" || num == null){
    num_err.innerHTML="Enter your number..."
    isValid = false;
}
else{
    num_err.innerHTML="";
}
// 
if(alnum == "" || alnum == null){
    alnum_err.innerHTML="Enter your Aul-number..."
    isValid = false;
}
else{
    alnum_err.innerHTML="";
}
// 
if(mail == "" || mail == null){
    mail_err.innerHTML="Enter your mail...";
    isValid = false;
}
else{
    mail_err.innerHTML="";
}
// 
if(gender == "" || gender == null){
    gender_err.innerHTML="Enter your Gender..." 
    isValid = false;
}
else{
    gender_err.innerHTML="";
}
// 
if(state == "" || state == null){
    state_err.innerHTML="Enter your state..." 
    isValid = false;
}
else{
    state_err.innerHTML="";
}
// 
if(pin_cod == "" || pin_cod == null){
    pin_cod_err.innerHTML="Enter your pin_code..."  ;

    isValid = false;
}
else{
    pin_cod_err.innerHTML="";
}
// 
if(add == "" || add == null){
    add_err.innerHTML="Enter your address...";
    isValid = false;
}
else{
    add_err.innerHTML="";
}
//
if(feedback == "" || feedback == null){
    feedback_err.innerHTML="Enter your feedback...";
    isValid = false;
}
else{
    feedback_err.innerHTML="";
}



if(isValid){
    document.getElementById('myform').style.display='none';
    document.getElementById('details_div').style.display='block';


    document.getElementById('det_fname').innerHTML=fname;
    document.getElementById('det_lname').innerHTML=lname;
    document.getElementById('det_num').innerHTML=num;
    document.getElementById('det_alnum').innerHTML=alnum;
    document.getElementById('det_mail').innerHTML=mail;
    document.getElementById('det_gender').innerHTML=gender;
    document.getElementById('det_state').innerHTML=state;
    document.getElementById('det_pin_cod').innerHTML=pin_cod
    document.getElementById('det_add').innerHTML=add;
    document.getElementById('det_feedback').innerHTML=feedback;
}
event.preventDefault();



}
