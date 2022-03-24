package com.learnings.assignment3;

import java.text.ParseException;
import java.util.Scanner;

public class Main {
    public static void main(String[]args){
        Scanner sc=new Scanner(System.in);
        HealthCare ghc=new HealthCare();
        String signUpDate = sc.nextLine();
        String currentDate = sc.nextLine();
        ghc.knowYourCustomerForm(signUpDate,currentDate);
        }
    }

