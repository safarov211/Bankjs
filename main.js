class BankAccount{
    balance = 0
    
    constructor(fullname, password) {
        this.name = fullname
        this.password=password
        
    }

    addBalance() {
        const value =+ inpAdd.value
        this.balance+=value
}

    withDrawBalance() {
         const value2 = +inpCash.value
        this.balance-=value2
    }


}


const Bank = new BankAccount("Dunyanur", 1234);