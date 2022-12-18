
function writeCards(namesArray, event) {
    let array = []
for (let i = 0; i < namesArray.length; i++){
    array.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
}
return array;

}

function countDown() {
    let i = 0;

    while(i < 11){
        console.log(i);
    i++
}
}