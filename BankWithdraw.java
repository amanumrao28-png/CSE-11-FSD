class Bank{
    synchronized void calculate(int n) {
        if(n>10000){
            System.out.println("Insufficient Balance");
            return;}

          System.out.println("Calculating for: " + n);
          System.out.println("Remaining Balance: " + (10000-n));
    }
}
 class BankThread extends Thread {
    Bank t;
    int num;

    BankThread(Bank r, int n) {
        t = r;
        num = n;
    }

    public void run() {
        t.calculate(num);
    }
}


public class BankWithdraw{
    public static void main(String[] args) {
      Bank obj = new Bank();

        BankThread t1 = new BankThread(obj, 11000);
        BankThread t2 = new BankThread(obj, 7000);

        t1.start();
        t2.start();  
    }
}