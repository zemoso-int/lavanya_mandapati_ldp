package banks;

import bankaccounts.BankAccount;
import banknames.BankNames;
public class Bank implements BankAccount {
    @Override
    public void addBank(BankNames bankName) { System.out.println("Creating Account..."+bankName); }
}
