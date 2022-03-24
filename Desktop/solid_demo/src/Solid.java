import bankaccountdetails.BankDetails;
import banknames.BankNames;
import banks.Bank;
import banks.HDFCBank;
import banks.MinorBank;
import banks.UnionBank;

public class Solid {
    public static void main(String[] args) {
        Bank bank=new Bank();
        MinorBank minorBank=new MinorBank();
        Bank unionBank=new UnionBank();
        HDFCBank hdfcBank=new HDFCBank();
        BankDetails bankDetails=new BankDetails();
        bank.addBank(BankNames.BANK);
        minorBank.addMinorBank(BankNames.BANK);
        unionBank.addBank(BankNames.UNION);
        bankDetails.printBankDetails(BankNames.BANK);
        hdfcBank.addBank(BankNames.HDFC);
        hdfcBank.addHDFCCredentials();
        bankDetails.printBankDetails(BankNames.HDFC);
    }
}
