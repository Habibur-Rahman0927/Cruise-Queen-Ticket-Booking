function flyingTicket( ticketClass,isIncrease){
    const inputNumber = getInputValue(ticketClass);
    let inputNewNumber = inputNumber;
    if(isIncrease == true){
        inputNewNumber = inputNumber+1;
    }if(isIncrease == false && inputNewNumber > 0){
        inputNewNumber = inputNumber -1;
    }
    document.getElementById(ticketClass + '-count').value = inputNewNumber;
    calculationTicketPrice();
}
function calculationTicketPrice(){
    const totalPrice = getInputValue('firstClass')*150 + getInputValue('businessClass')*100;
    document.getElementById('subtotal').innerText = totalPrice;
    const txtPrice =Math.round(totalPrice/10);
    document.getElementById('txtTotal').innerText = txtPrice;
    const grandTotalPrice = totalPrice+txtPrice;
    document.getElementById('grandTotal').innerText = grandTotalPrice;
}

function getInputValue(ticketClass){
    const inputCount = document.getElementById(ticketClass+'-count');
    const inputNewNumber = parseInt(inputCount.value);
    return inputNewNumber;
}


const bookComplete = document.getElementById('book-now');
bookComplete.addEventListener('click', function(){
    const mainBlcok = document.getElementById('alloverhide');
    mainBlcok.style.display = 'none';
    const happyBooking = document.getElementById('congras');
    happyBooking.style.display = 'block';
})




/* const increaseBtn = document.getElementById('increase-count');
increaseBtn.addEventListener('click', function(){
    const inputCount = document.getElementById('input-count');
    const inputNumber = parseInt(inputCount.value);
    const inputNewNumber = inputNumber + 1;
    inputCount.value=inputNewNumber;
    firstClassTicket(true)
})
 */

/* const decraseBtn = document.getElementById('decrease-count');
decraseBtn.addEventListener('click', function(){
    const inputCount = document.getElementById('input-count');
    const inputNumber = parseInt(inputCount.value);
    let inputNewNumber = inputNumber;
    if(inputNewNumber > 0){
        inputNewNumber = inputNumber -1;
    }

    inputCount.value = inputNewNumber;
    firstClassTicket(false)
}) */