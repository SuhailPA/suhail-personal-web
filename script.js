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
        else if(re.test(name))
        {
            nameHelp.style.color="black"
            document.getElementById("nameHelp").innerHTML="Kindly enter your Name";
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
    else if(num1.length<10 || num1=="" || num1.length>10)
    {
        document.getElementById("inputnumber1").focus();
        numberHelp.style.color="red"
        document.getElementById("numberHelp").innerHTML="10 numbers are mandatory";
        return false;
    }
  
    else{
        numberHelp.style.color="black"
        document.getElementById("numberHelp").innerHTML="Enter your Number";
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
    }
}

function Message()
{
    var mes=document.getElementById("inputMessage").value;
    if(mes.length<=3)
    {
        messageHelp.style.color="red"
        document.getElementById("messageHelp").innerHTML="Message should be atleast 4 or more worrds"
        return false
    }
    else{
        messageHelp.style.color="black"
        document.getElementById("messageHelp").innerHTML=""
        return true;
    }
}
