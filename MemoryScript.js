document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'Images/fries.png'
        },
        {
            name: 'fries',
            img: 'Images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'Images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'Images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'Images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'Images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'Images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'Images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.png'
        }
        
    ]

    //RANDOMIZE
    cardArray.sort(() => 0.5 - Math.random())

    //variables
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create the board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'Images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }

    //check for match
    function checkMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] ===cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'Images/white.png')
            cards[optionTwoId].setAttribute('src', 'Images/white.png')
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'Images/blank.png')
            cards[optionTwoId].setAttribute('src', 'Images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations, you have won!'
        }
    }


    //flip card
    function flipCard (){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkMatch, 500)
        }
    }

    createBoard()

})