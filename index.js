let user={
    name: "John",
    chips: 140
}
let wins = 0
let userdet =document.getElementById("userdetailssection")
userdet.textContent=user.name +" $"+ user.chips
let sumel=document.getElementById("sumfield")
let cardsel=document.getElementById("cardsfield")
let titleel=document.getElementById("title")
let cards=[]
let sum = 0
let hasblackjack= false
let isalive = false

function getrandomncard(){
    let card = Math.floor(Math.random()*13) +1
if (card >10){
    return 10
}
else if (card ===1 ){
    return 11
}
else{
    return card
}

}

function rendergame(){
    cardsel.textContent ="Sum: "
    for (i=0;  i<cards.length; i++){
        cardsel.textContent += cards[i] + " " 
    }
    sumel.textContent = "Sum: " + sum
    if(sum <21){
        titleel.textContent="Do you want to draw new card?"
    }
    else if (sum ===21){
        titleel.textContent="You've got a BlackJack"
        hasblackjack = true
        blackjack()
  
        
    }
    else {
        titleel.textContent="You're out of game"
        isalive =false
    }
    
}

function startgame(){ if (isalive===false){
    isalive = true
    let firstcard = getrandomncard()
    let secondcard = getrandomncard()
    sum = firstcard + secondcard
    cards = [firstcard,secondcard]
    rendergame()}
}
function newcard(){
    if (isalive === true && hasblackjack === false)
    {
        let newcard = getrandomncard()
        sum += newcard
        cards.push(newcard)
        rendergame() 
    }
}


function blackjack(){
    user.chips = user.chips + 10
    userdet.textContent=user.name +" $"+ user.chips
}


