let cardsBoard = document.getElementById('area');
let match = document.getElementsByClassName('cardMatch');
let timeArr = [];

const emojis = ['🎶', '🎶', '💕', '💕', '😍', '😍', '😎', '😎', '🌭', '🌭', '💙', '💙', '🛸', '🛸', '😥', '😥'];

let randomizedEmojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

let clicksCount = 0;

// console.log(randomizedEmojis);

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
        clicksCount++;
        if(clicksCount === 1){
            let time = document.getElementById('time');
            let j = 0;
            let a = setInterval(() => {
                time.innerHTML = "Time left: " + timeArr[j+2];
                j++
                if (j === timeArr.length - 1) {
                    clearInterval(a);
                    time.innerHTML = "Time over";
                }
                if(match.length === 16){
                    clearInterval(a);
                    time.innerHTML = "Your time is: " + timeArr[j];
                }
            },1000);

            clicksCount++;
        }
        console.log(match.length);
        this.classList.add('cardOpen');
        setTimeout(function (){
            if(document.querySelectorAll('.cardOpen').length > 1){
                if(document.querySelectorAll('.cardOpen')[0].innerHTML === document.querySelectorAll('.cardOpen')[1].innerHTML){
                    document.querySelectorAll('.cardOpen')[0].classList.add('cardMatch');
                    document.querySelectorAll('.cardOpen')[1].classList.add('cardMatch');
                    document.querySelectorAll('.cardOpen')[1].classList.remove('cardOpen');
                    document.querySelectorAll('.cardOpen')[0].classList.remove('cardOpen');
                }else {
                    document.querySelectorAll('.cardOpen')[1].classList.remove('cardOpen');
                    document.querySelectorAll('.cardOpen')[0].classList.remove('cardOpen');
                }
            }
        }, 1000);
    };
}

for (let i = 0; i < 60; i++) {
    timeArr.push('00'+':'+(59-i));
}

// console.log(timeArr);

// let time = document.getElementById('time');
// let j = 0;
// let a = setInterval(() => {
//         time.innerHTML = "Time left: " + timeArr[j];
//         j++
//     if (j === timeArr.length - 1) {
//         clearInterval(a);
//         time.innerHTML = "Time over";
//     }
// },1000);

