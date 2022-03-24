package com.learnings.assignment2;

import java.util.Scanner;

import static java.lang.System.in;

public class StringClass {
    Scanner scanner=new Scanner(in);
    String input= scanner.nextLine();
    String string="abcdefghijklmnopqrstuvwxyz";
    int len=input.length();
    int alphabetLength=string.length();
    int count=0;
    public void check()
    {
        if(len>=alphabetLength)
        {
            for(int i=0;i<alphabetLength;i++)
            {
                String char1= String.valueOf(string.charAt(i));
                if(input.contains(char1))
                {
                    count++;
                }
                else
                {
                    System.out.println("doesn't contain the alphabets");
                    break;
                }
                if(count==26) {
                    System.out.println("complete alphabets list exists in the given input");
                }
            }
        }
        else
        {
            System.out.println("doesnt contain the alphabets");
        }
    }
}
