function editProfile() {
    let newName = "aziz";
    document.getElementById("profile-name").innerText = newName;
  }
   
  function handleRequest(button, accepted) {
    let requestItem = button.closest("li");
    requestItem.remove();
    let requestsCountEl = document.getElementById("requests-count");
    let requestsCount = parseInt(requestsCountEl.innerText);
    requestsCountEl.innerText = requestsCount - 1;
  }
   
  function dicline(button, accepted) {
    let requestItem = button.closest("li");
    requestItem.remove();
    let requestsCountEl = document.getElementById("Your Connect");
    let requestsCount = parseInt(requestsCountEl.innerText);
    requestsCountEl.innerText = requestsCount + 1;
    let requestsCountEl2 = document.getElementById("requests-count");
    let requestsCount2 = parseInt(requestsCountEl2.innerText);
    requestsCountEl2.innerText = requestsCount2 - 1;
  }
   