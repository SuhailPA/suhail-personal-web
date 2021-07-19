function validation1(){
   
    var re=/^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    var name=document.getElementById('nameField').value
    if(name=="")
    {
        document.getElementById("nameField").focus();
        nameHelp.style.color="red"
        document.getElementById("nameHelp").innerHTML="Name is mandatory";
        return false;
    }
    else if(name.length<4)
    {
        document.getElementById("nameField").focus();
        nameHelp.style.color="red"
        document.getElementById("nameHelp").innerHTML="Name should be atleast 4 characters";
        return false;
    }
    else if(re.test(name))
    {
        nameHelp.style.color="black"
        document.getElementById("nameHelp").innerHTML="";
        return true;
    }
    else{
        
        document.getElementById("nameField").focus();
        nameHelp.style.color="red"
        document.getElementById("nameHelp").innerHTML="Enter valid name";
        return false;
    }
}

function numValidation()
{  
var num1=document.getElementById("inputnumber1").value

if(isNaN(num1))
{ 
    document.getElementById("inputnumber1").focus();
    numberHelp.style.color="red"
    document.getElementById("numberHelp").innerHTML="Enter valid Number";
    return false;
}
else if(num1.length<10)
{
    document.getElementById("inputnumber1").focus();
    numberHelp.style.color="red"
    document.getElementById("numberHelp").innerHTML="10 numbers are mandatory";
    return false;
}
else if(num1.length>10)
{
    document.getElementById("inputnumber1").focus();
    numberHelp.style.color="red"
    document.getElementById("numberHelp").innerHTML="Limit exceeded";
    return false;
}
else{
    numberHelp.style.color="black"
    document.getElementById("numberHelp").innerHTML="";
    return true;
}
}

function mailValidation(){
var mailV=/^[^]+@[^]+\.[a-z]{2,3}$/;

var mail=document.getElementById("InputEmail1").value
if(mail=="")
{
    document.getElementById("InputEmail1").focus();
    emailHelp.style.color="red"
    document.getElementById("emailHelp").innerHTML="email Id is mandatory"
    return false
}
else if(mail.match(mailV))
{
    emailHelp.style.color="black"
    document.getElementById("emailHelp").innerHTML="Enter Email-ID"
    return true;
}
else{
    document.getElementById("InputEmail1").focus();
    emailHelp.style.color="red"
    document.getElementById("emailHelp").innerHTML="Enter valid email-ID"
    return false
}
}

function Message()
{
var mes=document.getElementById("inputMessage").value;
if(mes=="")
{
    messageHelp.style.color="red"
    document.getElementById("messageHelp").innerHTML="Message can't be  null"
    return false
}
else if(mes.length<=3)
{
    messageHelp.style.color="red"
    document.getElementById("messageHelp").innerHTML="Message should be atleast 4 or more words"
    return false
}
else{
    messageHelp.style.color="black"
    document.getElementById("messageHelp").innerHTML=""
    return true;
}
}
