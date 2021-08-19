using System;
using System.Collections.Generic;

namespace p14
{
    class Program
    {
        static ulong Collatz(ulong n)
        {
            if (n % 2 == 0) { n /= 2; }
            else
            {
                n *= 3;
                n += 1;
            }

            return n;
        }

        static void Main(string[] args)
        {
            int n = 2, length, longest = 0, lim = 1000000, num = 0;

            ulong temp = 0;

            while (n < lim)
            {
                if (n % 100000 == 0)
                {
                    Console.WriteLine(n);
                    //Console.WriteLine(highest);
                }

                length = 1; //how many numbers remain infront of each number 
                temp = (ulong) n;

                while (temp > 1) //generate collatz sequence
                {
                    temp = Collatz(temp);
                    length++;
                }

                if(length > longest)
                {
                    longest = length;
                    num = n;
                }

                n++;
            }

            Console.WriteLine($"number with the longest sequence below {lim}: {num}");

            Console.ReadKey();
        }
    }
}