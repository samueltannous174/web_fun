 
 
function toggleLogin() {
    const btn = document.getElementById("loginBtn");
    if (btn.innerText === "Login") {
      btn.innerText = "Logout";
    }
     else {
      btn.innerText = "Login";
    }
  }   

function like(button) {
  alert("Ninja was liked");
  let likes = parseInt(button.innerText);
  button.innerText = (likes + 1) + " likes";
}

 
 
 
 function removeBtn() {
    const btn = document.getElementById("addDefBtn");
    if (btn) {
      btn.remove(); 
    } else{
      console.log("no btn"); 
    }
  }
function like(button) {
  alert("Ninja was liked");
  let likes = parseInt(button.innerText);
  button.innerText = (likes + 1) + " likes";
}
 
 
 
 