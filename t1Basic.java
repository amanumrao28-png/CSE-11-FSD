
class BankAccount {
    protected String accountName;
    protected String accountNumber;
    protected String accountHolder;
    protected float balance;

    BankAccount(String accountName, String accountNumber,
                String accountHolder, float balance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    void deposit(float amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid amount!");
        }
    }

    void withdraw(float amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println(
                "Insufficient balance or invalid amount!"
            );
        }
    }

    void checkBalance() {
        System.out.println("Account Name: " + accountName);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: " + balance);
        System.out.println("-------------------------");
    }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(String accountName, String accountNumber,
                   String name, float balance) {
        super(accountName, accountNumber, name, balance);
    }
}

class CurrentAccount extends BankAccount {
    CurrentAccount(String accountName, String accountNumber,
                   String name, float balance) {
        super(accountName, accountNumber, name, balance);
    }
}

public class t1Basic {
    public static void main(String[] args) {

        SavingsAccount saving = new SavingsAccount(
            "Savings Account",
            "10010001",
            "Alok",
            5000.0f
        );

        saving.deposit(2000.0f);
        saving.withdraw(1000.0f);
        saving.checkBalance();

        CurrentAccount current = new CurrentAccount(
            "Current Account",
            "20020001",
            "Rahul",
            10000.0f
        );

        current.deposit(3000.0f);
        current.withdraw(2000.0f);
        current.checkBalance();
    }
}