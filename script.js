let game = document.getElementById('game')
let step=document.getElementById('step')
let attempts=0
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
    imageNames.sort(()=>Math.random()-0.5);
for (let i = 0; i < 30; i++) {
    let img = document.createElement('img')
    img.classList.add('card')
    img.src = 'card.jpg'
    game.appendChild(img)
    img.onclick = function () {
        
        img.style.transform = 'scaleX(0)'
        setTimeout(function () {
            openCards.push(img)
            img.src = imageNames[i]
            img.style.transform = 'scaleX(1)'
            if (openCards.length == 2) {
                console.log(openCards[0].src, openCards[1].src);
                if (openCards[0].src == openCards[1].src) {
                    console.log('yes');
                    openCards[0].classList.add('blocked')
                    openCards[1].classList.add('blocked')
                    openCards=[]
                }
                else {
                    console.log('no');
                    let cards=document.getElementsByClassName('card')
                    for(let card of cards){
                        card.classList.add('blocked')
                    }
                    setTimeout(() => {
                        openCards[0].style.transform = 'scaleX(0)';
                        openCards[1].style.transform = 'scaleX(0)';
                        setTimeout(() => {
                            openCards[0].src = 'card.jpg'
                            openCards[1].src = 'card.jpg'
                            openCards[0].style.transform = 'scaleX(1)';
                            openCards[1].style.transform = 'scaleX(1)';
                            openCards=[]
                            for(let card of cards){
                                console.log(card.src);
                                if(card.src.includes('card.jpg')){
                                    card.classList.remove('blocked')
                                }
                            }
                        }, 500);
                    }, 1000);
                }
                attempts=attempts+1
                step.innerHTML='Attempts:'+attempts
            }
        }, 500)
    }
    // if()
}
// д/з:добавить заголовок ходов:0;если открыть 2 карточки,то ходов:1