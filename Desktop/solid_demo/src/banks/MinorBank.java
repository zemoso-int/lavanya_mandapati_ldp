package banks;

import bankaccounts.MinorBankAccount;
import banknames.BankNames;

public class MinorBank implements MinorBankAccount {
    public void addMinorBank(BankNames bankName){ System.out.println("Creating Minor Bank Account..."+bankName); }
}
