package com.learnings.assignment3;
import java.time.LocalDate;

public class HealthCare {
    String current;
    public void knowYourCustomerForm(String signUpDate, String currentDate) {
        LocalDate signUpDateForm = LocalDate.parse(signUpDate);
        LocalDate currentDateForm = LocalDate.parse(currentDate);
        LocalDate currentDatePast = LocalDate.parse(currentDate);
        int day = currentDateForm.getDayOfMonth();
        int month = currentDateForm.getMonthValue();
        int currentYear = currentDateForm.getYear();
        int signUpYear = signUpDateForm.getYear();
        if (month < 10 && day<10) {
            current = currentYear + "-0" + month + "-0" + day;
        } else if (month>=10 && day<10){
            current = currentYear + "-" + month + "-0" + day;
        }
        else if(month>=10 && day>=10)
        {
            current = currentYear + "-" + month + "-" + day;
        }
        else if(month<10 && day>=10)
        {
            current = currentYear + "-0" + month + "-" + day;
        }

        if (currentYear == signUpYear) {
            System.out.println("No range");
        } else {
            LocalDate date3 = LocalDate.parse(current);
            LocalDate min_value = date3.minusDays(30);
            System.out.println(min_value);
            LocalDate max_value=date3.plusDays(30);
            if(max_value.isAfter(currentDatePast))
            {
                System.out.println(currentDatePast);
            }
            else
            {
                System.out.println(max_value);
            }

        }


    }
}
