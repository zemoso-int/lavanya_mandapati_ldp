package banks;

import banknames.BankNames;

public class UnionBank extends Bank {
    @Override
    public void addBank(BankNames bankName) { System.out.println("Creating Account..."+bankName); }
}
