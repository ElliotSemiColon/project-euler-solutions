//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//a^2 + b^2 = c^2

//For example, 32 + 42 = 9 + 16 = 25 = 52.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

using System;

namespace p9
{
    class Program
    {
        static void Main(string[] args)
        {
            double c;

            for(int a = 1; a < 1000; a++) 
            {
                for(int b = a; b < 1000; b++) // 0.5(n^2 - n) complexity to symetrically compare all 1000 i to 1000 j (opposed to n^2)
                {
                    c = Math.Sqrt(a * a + b * b);

                    if(a + b + c == 1000)
                    {
                        Console.WriteLine(a * b * c);
                    }
                }
            }

            Console.ReadKey();
        }
    }
}
