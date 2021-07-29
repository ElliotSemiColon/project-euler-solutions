#include <iostream>
#include <cmath> //for sqrt and ceil

// PROBLEM TITLE: Even Fibonacci numbers

int main() 
{
    int i = 1, j = 2, temp; //first and second term
    int sum = 2;

    do{
        temp = j;
        j += i;
        i = temp;
        if(j % 2 == 0){ sum += j; }
    }while (i <= 4000000 && j <= 4000000);

    printf("%d", sum);
    return 0;
}