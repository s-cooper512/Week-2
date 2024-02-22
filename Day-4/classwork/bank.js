let bankAccount = {
    accountHolderName: "Alex Doe",
    balance: 0,
    deposit: function(amount) {
        amount += this.balance;
        if (amount > 0) {
            this.balance = amount;
            console.log("Deposit successful!");
            this.displayBalance();
        } else {
            console.log("Invalid deposit amount!");
        }
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawal successful!");
            this.displayBalance();
        } else {
            console.log("Insufficient funds!");
        }
    },
    displayBalance: function() {
        console.log("Current balance: $", this.balance);
    }
};

bankAccount.deposit(29);
bankAccount.withdraw(12);
bankAccount.deposit(-40000);
bankAccount.withdraw(20000000);