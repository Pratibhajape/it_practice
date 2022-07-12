function account(){
    // alert(" form submitted successfully")
let email=document.getElementById(email).value;
let password=document.getElementById(password).value;
let student_name=document.getElementById(student_name).value;
let college_name=document.getElementById(college_name).value;
let branch=document.getElementById(branch).value;
let phone_number=document.getElementById(phone_number).value;
let address=document.getElementById(address).value;

    document.write("student_name" +student_name)
    document.write("<br>email:"+email)
    document.write("<br>college_name" +college_name)
    document.write("<br>branch" +branch)
    document.write("<br>phone_number" +phone_number)
    document.write("<br>address" +address)
}
