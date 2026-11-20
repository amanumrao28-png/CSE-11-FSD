class table {
    synchronized void calculate(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println("Table of " + n + ": " + (n * i));
        }
    }
}

class tableThread extends Thread {
    table t;
    int num;

    tableThread(table r, int n) {
        t = r;
        num = n;
    }

    public void run() {
        t.calculate(num);
    }
}

public class threadEx {
    public static void main(String[] args) {

        table obj = new table();

        tableThread t1 = new tableThread(obj, 3);
        tableThread t2 = new tableThread(obj, 5);

        t1.start();
        t2.start();
    }
}