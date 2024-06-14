let game = document.getElementById('game')
let step = document.getElementById('step')
let player = document.getElementById('player')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let mode = 1
let playerN = 0
let red = 0
let blue = 0
let green = 0
let yellow = 0
let score0 = document.getElementById('score0')
let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let score3 = document.getElementById('score3')
let modal = document.getElementById('modal')
let uwin = document.getElementById('uwin')
let counter = 0
let pairs = 0
let attempts = 0
let openCards = []
let imageNames = [
    "3ffc005a-43e2-4ef3-8a3a-e3bc0fa5ba60.jpeg",
    "5e4e8851-f6fb-4918-a62b-a88ad3b63193_1614897824919.jpg",
    "5fa574ec9c458b973fbc1980.jpg",
    "35e6461c-6415-4822-870d-9e31f469043d.jpeg",
    "87c3569a-7e18-42cd-8709-a694e242c10f_1626887272633.jpg",
    "39287_7p37p13o8.webp",
    "89812dbb-68d5-4528-83bb-d03e5f9cfd63.jpeg",
    "1637048_7p8mc5en6.webp",
    "5979340-khaski-demon.jpg",
    "9986096034056af36991fb878215a987.jpg",
    "be66ecd7-e9d8-4632-b569-528e94a20822_1621632530080.jpg",
    "dd6e1cd7-3b8e-401e-b4c4-987765566cf1_1628074102577.jpg",
    "e614930134989d8b27b09b2c0707c66a--giraffe-facts-for-kids-giraffe-craft-for-adults.jpg",
    "f1550f4a-2889-412c-bab2-e07643538ecd_1620157371867.jpg",
    "FUKEsZsGRuQzl27aqd74EFligGe6SEdyp7DFqAz6CNL5n-tPRboGJmn8WY32IrKb_hlTIKa4.jpg",
    "3ffc005a-43e2-4ef3-8a3a-e3bc0fa5ba60.jpeg",
    "5e4e8851-f6fb-4918-a62b-a88ad3b63193_1614897824919.jpg",
    "5fa574ec9c458b973fbc1980.jpg",
    "35e6461c-6415-4822-870d-9e31f469043d.jpeg",
    "87c3569a-7e18-42cd-8709-a694e242c10f_1626887272633.jpg",
    "39287_7p37p13o8.webp",
    "89812dbb-68d5-4528-83bb-d03e5f9cfd63.jpeg",
    "1637048_7p8mc5en6.webp",
    "5979340-khaski-demon.jpg",
    "9986096034056af36991fb878215a987.jpg",
    "be66ecd7-e9d8-4632-b569-528e94a20822_1621632530080.jpg",
    "dd6e1cd7-3b8e-401e-b4c4-987765566cf1_1628074102577.jpg",
    "e614930134989d8b27b09b2c0707c66a--giraffe-facts-for-kids-giraffe-craft-for-adults.jpg",
    "f1550f4a-2889-412c-bab2-e07643538ecd_1620157371867.jpg",
    "FUKEsZsGRuQzl27aqd74EFligGe6SEdyp7DFqAz6CNL5n-tPRboGJmn8WY32IrKb_hlTIKa4.jpg",
]
player.onclick = function (event) {
    event.preventDefault();
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'
}
p2.onclick = function (event) {
    event.preventDefault();
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'
    step.style.opacity = 0
    score0.style.opacity = 1
    score1.style.opacity = 1
    mode = 2
    playerN = Math.floor(Math.random() * 2)
    if (playerN == 0) {
        document.body.style.backgroundColor = '#ff000055'
    }
    else {
        document.body.style.backgroundColor = '#0000ff55'
    }
}
p3.onclick = function (event) {
    event.preventDefault();
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'
    step.style.opacity = 0
    score0.style.opacity = 1
    score1.style.opacity = 1
    score2.style.opacity = 1
    mode = 3
    playerN = Math.floor(Math.random() * mode)
    if (playerN == 0) {
        document.body.style.backgroundColor = '#ff000055'
    }
    else if (playerN == 1) {
        document.body.style.backgroundColor = '#0000ff55'
    }
    else {
        document.body.style.backgroundColor = '#00ff0055'
    }
}
p4.onclick = function (event) {
    event.preventDefault();
    modal.style.opacity = 0
    modal.style.pointerEvents = 'none'
    step.style.opacity = 0
    score0.style.opacity = 1
    score1.style.opacity = 1
    score2.style.opacity = 1
    score3.style.opacity = 1
    mode = 4
    playerN = Math.floor(Math.random() * mode)
    // playerN = 3
    if (playerN == 0) {
        document.body.style.backgroundColor = '#ff000055'
    }
    else if (playerN == 1) {
        document.body.style.backgroundColor = '#0000ff55'
    }
    else if (playerN == 2) {
        document.body.style.backgroundColor = '#00ff0055'
    }
    else {
        document.body.style.backgroundColor = '#ffff0055'
    }
}
imageNames.sort(() => Math.random() - 0.5);
for (let i = 0; i < 30; i++) {
    let img = document.createElement('img')
    img.classList.add('card')
    img.src = 'card.jpg'
    game.appendChild(img)
    img.onclick = function () {
        let cards = document.getElementsByClassName('card')
        counter++
        img.classList.add('blocked')
        if (counter == 2) {
            for (let card of cards) {
                card.classList.add('blocked')
            }
        }
        img.style.transform = 'scaleX(0)'
        setTimeout(function () {
            openCards.push(img)
            img.src = imageNames[i]
            img.style.transform = 'scaleX(1)'
            if (openCards.length == 2) {
                if (openCards[0].src == openCards[1].src) {
                    console.log('yes');
                    if (playerN == 0) {
                        red = red + 1
                    }
                    else if (playerN == 1) {
                        blue = blue + 1
                    }
                    else if (playerN == 2) {
                        green = green + 1
                    }
                    else {
                        yellow = yellow + 1
                    }
                    score0.innerHTML = 'Score:' + red
                    score1.innerHTML = 'Score:' + blue
                    score2.innerHTML = 'Score:' + green
                    score3.innerHTML = 'Score:' + yellow
                    pairs = pairs + 1
                    if (pairs == 15) {
                        console.log('WIN')
                        if (mode>1) {
                            if (red > blue && red > green && red > yellow) {
                                uwin.innerHTML = 'RED WIN'
                            }
                            else if (blue > red && blue > green && blue > yellow) {
                                uwin.innerHTML = 'BLUE WIN'
                            }
                            else if (green > red && green > blue && green > yellow) {
                                uwin.innerHTML = 'GREEN WIN'
                            }
                            else {
                                uwin.innerHTML = 'YELLOW WIN'
                            }

                        }
                        uwin.style.opacity = 1
                    }
                    openCards[0].classList.add('blocked')
                    openCards[1].classList.add('blocked')
                    openCards = []
                    counter = 0
                    for (let card of cards) {
                        if (card.src.includes('card.jpg')) {
                            card.classList.remove('blocked')
                        }
                    }
                }
                else {
                    console.log('no');
                    setTimeout(() => {
                        openCards[0].style.transform = 'scaleX(0)';
                        openCards[1].style.transform = 'scaleX(0)';
                        setTimeout(() => {
                            openCards[0].src = 'card.jpg'
                            openCards[1].src = 'card.jpg'
                            openCards[0].style.transform = 'scaleX(1)';
                            openCards[1].style.transform = 'scaleX(1)';
                            openCards = []
                            counter = 0
                            if (mode == 2) {
                                if (playerN == 0) {
                                    playerN = 1
                                    document.body.style.backgroundColor = '#0000ff55'
                                }
                                else {
                                    playerN = 0
                                    document.body.style.backgroundColor = '#ff000055'
                                }
                            }
                            if (mode == 3) {
                                if (playerN == 0) {
                                    playerN = 1
                                    document.body.style.backgroundColor = '#0000ff55'
                                }
                                else if (playerN == 1) {
                                    playerN = 2
                                    document.body.style.backgroundColor = '#00ff0055'
                                }
                                else {
                                    playerN = 0
                                    document.body.style.backgroundColor = '#ff000055'
                                }
                            }
                            if(mode==4){
                                if (playerN == 0) {
                                    playerN = 1
                                    document.body.style.backgroundColor = '#0000ff55'
                                }
                                else if (playerN == 1) {
                                    playerN = 2
                                    document.body.style.backgroundColor = '#00ff0055'
                                }
                                else if(playerN==2){
                                    playerN=3
                                    document.body.style.backgroundColor='#ffff0055'
                                }
                                else {
                                    playerN = 0
                                    document.body.style.backgroundColor = '#ff000055'
                                }
                            }
                            for (let card of cards) {
                                if (card.src.includes('card.jpg')) {
                                    card.classList.remove('blocked')
                                }
                            }
                        }, 500);
                    }, 1000);
                }
                attempts = attempts + 1
                step.innerHTML = 'Attempts:' + attempts
            }
        }, 500)
    }
    // if()
}
// д/з:добавить заголовок ходов:0;если открыть 2 карточки,то ходов:1