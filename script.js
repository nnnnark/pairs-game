let cardsBoard = document.getElementById('area');
// let cards = document.getElementsByClassName('cards');

// let timeLimit;

const emojis = ['🎶', '🎶', '💕', '💕', '😍', '😍', '😎', '😎', '🌭', '🌭', '💙', '💙', '🛸', '🛸', '😥', '😥'];

let randomizedEmojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

console.log(randomizedEmojis);

for (let i = 0; i < 16; i++) {
    // cardsBoard.innerHTML += "<div class='cards'>" + randomizedEmojis[i] + "</div>";
    //
    // cards.onclick = function (){
    //     this.classList.add('cardOpen');
    // }
    let card = document.createElement('div');
    card.className = 'cards';
    card.innerText = randomizedEmojis[i];
    cardsBoard.appendChild(card);

    card.onclick = function() {
        this.classList.add('cardOpen');
        setTimeout(function (){
            if(document.querySelectorAll('.cardOpen').length > 1){
                if(document.querySelectorAll('.cardOpen')[0].innerHTML === document.querySelectorAll('.cardOpen')[1].innerHTML){
                    document.querySelectorAll('.cardOpen')[0].classList.add('cardMatch');
                    document.querySelectorAll('.cardOpen')[1].classList.add('cardMatch');
                    document.querySelectorAll('.cardOpen')[0].classList.remove('cardOpen');
                    document.querySelectorAll('.cardOpen')[1].classList.remove('cardOpen');
                }else {
                    document.querySelectorAll('.cardOpen')[1].classList.remove('cardOpen');
                    document.querySelectorAll('.cardOpen')[0].classList.remove('cardOpen');
                }
            }
        }, 1000);
    };
}


