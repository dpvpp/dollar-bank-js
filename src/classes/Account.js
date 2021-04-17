class Account {

    Account(pin, balance){
        this.pin = pin;
        this.balance = balance;
        this.transactions = ["Initial Deposit $" + balance + " " + new Date()];
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    get balance() {
        return this._balance;
    }
}

export default Account