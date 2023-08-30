

let balance = 0
inpAdd.addEventListener('keydown', function (e) {
    const value = inpAdd.value
    if (inpAdd.value < 0) {
        alert('Please enter correct value.')
        return
    } else if (e.key == 'Enter') {
        Bank.addBalance()
        inpAdd.value = ''
        alert(`Deposited succesful ${value}. Your balance ${Bank.balance}$`)
    }

console.log();
    
})

inpCash.addEventListener('keydown', function (e) {
    const value2 = inpCash.value
    if (inpCash.value > Bank.balance) {
        return alert('Low balance')
    } else if (e.key == 'Enter' && inpCash.value > 0) {
        Bank.withDrawBalance()
        inpCash.value = ''
        alert(`Withdraw succesful ${value2}. Now your balance ${Bank.balance}$`)
    }
})

inpShow.addEventListener("click", function () {
    alert(`Your balance ${Bank.balance}$`)
})



btnSign.addEventListener('click', function (e) {
    e.preventDefault()
    if (inpName.value != '' && inpPassword.value != '') {
        maindiv.classList.add('d-none')
        divBalance.classList.remove('d-none')
        divBalance.classList.add('d-block')
    } else {
        alert('Please fill in the inputs')
    }
})  