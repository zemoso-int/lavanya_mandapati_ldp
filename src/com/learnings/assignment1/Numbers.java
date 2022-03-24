package com.learnings.assignment1;

public class Numbers {
    public void printNumbers()
    {
        for(int i=1;i<100;i++)
        {
            if(i%5==0 && i%3==0)
            {
                System.out.println("FizzBuzz");
            }
            else if(i%5==0)
            {
                System.out.println("Buzz");
            }
            else if(i%3==0)
            {
                System.out.println("Fizz");
            }
            else
            {
                System.out.println(i);
            }
        }
    }
}
