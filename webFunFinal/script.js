window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.style.backgroundColor = window.pageYOffset > 0 ? 'white' : 'transparent';
});

const button = document.querySelector('.firstComponentButton');

function hoverButton(){
    button.classList.remove('defaultButtonColor');
    button.classList.add('hoverButton');
}

function removeHoverButton(){
    button.classList.remove('hoverButton');
    button.classList.add('defaultButtonColor'); 
}

var isChanged = true;
function changeContentAndImage(){
    var secondComponentLeftParagraphTwo = document.querySelector('.definition');
    var secondComponentRightImage = document.querySelector('.secondComponentRightImage');
    const button2 = document.querySelector('.secondComponentButton');
    if (isChanged) {
        secondComponentLeftParagraphTwo.innerHTML = "New New ipsum dolor sit amet consectetur adipisicing elit. Quae aut reiciendis consectetur corrupti voluptatibus dolorem architecto fugiat distinctio eum voluptates cupiditate eaque rem a atque omnis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut reiciendis consectetur corrupti voluptatibus dolorem architecto fugiat distinctio eum voluptates cupiditate eaque rem a atque omnis.";
        secondComponentRightImage.src = "images/alt-features.png";
        button2.innerHTML = "Change Back";
    } else {
        secondComponentLeftParagraphTwo.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut reiciendis consectetur corrupti voluptatibus dolorem architecto fugiat distinctio eum voluptates cupiditate eaque rem a atque omnis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut reiciendis consectetur corrupti voluptatibus dolorem architecto fugiat distinctio eum voluptates cupiditate eaque rem a atque omnis.";
        secondComponentRightImage.src = "images/about.jpg";
        button2.innerHTML = "Make A Change";
    }
    isChanged = !isChanged;
}

let limit = 3;
function addService(){
    if (limit >= 5) {
        document.querySelector('.thirdComponentButton').disabled = true;
    }
    var thirdComponentBottom = document.querySelector('.thirdComponentBottom');
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<img src="images/features.png" class="cardImage" alt="cardImage"> <p class="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut reiciendis consectetur corrupti voluptatibus dolorem architecto fugiat distinctio eum  fugiat distinctio eum  fugiat distinctio eum  fugiat distinctio eum voluptates cupiditate eaque rem a atque omnis.</p>';
    thirdComponentBottom.appendChild(card);
    limit++;
}





