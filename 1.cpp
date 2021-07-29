#include <iostream>
#include <bitset> //for bitset
#include <cmath> //for sqrt and ceil

// PROBLEM TITLE: Multiples of 3 or 5

int main() 
{

    int total = 0;

    for(int i = 1; i < 1000; i++)
    {
        if(i % 3 == 0 || i % 5 == 0){ 
            //printf("%d\n", i);
            { total += i; }
        }
    }

    printf("%d", total);

    return 0;
}