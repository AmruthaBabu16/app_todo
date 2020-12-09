let username=document.getElementById("username");
let password=document.getElementById("password");
function show(){
    password.placeholder="Enter five digit password";
    username.placeholder="Enter your Username..."
}

function validate()
{
  if(username.value==""&&password.value==""){
    alert("Enter username and password");
    return false;
  }
  else if(username.value==""){
      alert("Username can't be blank");
      return false;
  }
  else if(username.value!=="admin"&&password.value!=="12345"){
    alert("Enter valid username and password");
    return false;}
else if(username.value!=="admin"){
    alert("Invalid Username ");
    return false;
}
else if(password.value==""){
    alert("Enter your password");
    return false;
}
else if(username.value=="admin"&&password.value!=="12345"){
    alert("Wrong password...!");
    return false;
}

 else if(username.value=="admin"&&password.value=="12345"){
     return true;
 }
};
