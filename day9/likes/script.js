
function likePost(button) {
    const likeCount = button.parentElement.querySelector(".like-count");
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count + " like(s)";
}
