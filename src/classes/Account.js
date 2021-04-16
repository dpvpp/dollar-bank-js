class Account {

    Account(pin, balance){
        this.pin = pin;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

export default Account