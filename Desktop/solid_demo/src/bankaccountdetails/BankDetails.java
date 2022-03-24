package bankaccountdetails;
import banknames.BankNames;

public class BankDetails implements BankAccountDetails {
    @Override
    public void printBankDetails(BankNames bankName){
        System.out.println("Bank Details..."+bankName);
    }
}
