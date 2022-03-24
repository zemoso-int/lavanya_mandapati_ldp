interface Bank
{
    void addBank();
    void deleteBank();
    void print();
}
class GeneralsBank implements Bank
{
    private String bankName;
    GeneralsBank(String bankName){ this.bankName=bankName;}
    @Override
    public void addBank(){

        if(this.bankName.equalsIgnoreCase("Bank"))System.out.println("Adding Bank Account");
        else System.out.println("Adding New Bank Account");
    }
    public void addMinorBank(){ System.out.println("Adding Minor Bank Account"); }
    @Override
    public void deleteBank(){
        System.out.println("Deleting Bank Account");
    }
    @Override
    public void print(){
        System.out.println("Printing Bank Details");
    }
}
class gpay
{

}
public class HDFCBank extends GeneralsBank {
    public final gpay;
    HDFCBank(String bankName) {
        super(bankName);
        gpay Gpay = new gpay();
    }
    @Override
    public void addBank(){
        System.out.println("Adding HDFC Account");
    }
}
public class WithOutSolid {
    public static void main(String[] args) {
        GeneralsBank bank1=new GeneralsBank("Bank");
        GeneralsBank bank2=new GeneralsBank("NewBank");
        HDFCBank hdfcBank=new HDFCBank("NewBank");
        bank1.addBank();
        bank1.addMinorBank();
        bank1.deleteBank();
        bank1.print();
        bank2.addBank();
        hdfcBank.addBank();
    }
}