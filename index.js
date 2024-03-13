const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i= 0; i< gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
return gifts;
}

wrapGifts(gifts);

const names = [];
const event ="";
let messages =[];
const message = []
function writeCards(names, event) {
    for (let i=0; i<names.length; i++) {
       messages = [...messages, `Thank you, ${names[i]}, for the wonderful ${event} gift!`]
    }
    console.log(messages);
    return messages;
}
writeCards([], "surprise")


function countDown(i) {
    while(i >= 0){
        console.log(i--)
    }
}
