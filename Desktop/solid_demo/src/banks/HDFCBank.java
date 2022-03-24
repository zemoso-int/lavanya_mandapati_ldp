package banks;


import banknames.BankNames;

public class HDFCBank extends Bank {
    @Override
    public void addBank(BankNames bankName) {
        System.out.println("Creating Account..."+bankName);
    }
    public void addHDFCCredentials(){
        System.out.println("Hang On.... Adding HDFC Credentials");
    }
}

