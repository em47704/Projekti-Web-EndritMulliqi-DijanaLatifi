const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
 



  

function valid(){
  alert("Write the name")
if (document.forms.username.value == "Name") {
alert("Write the name");
document.Form.username.focus();
return true;
}
if (document.forms.password.value== "") {
alert("Write the password");
  document.endritii.password.focus();
  return false;
  
  }
  
  }