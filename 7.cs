using System;
using System.IO;

namespace p8
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] rawLines = File.ReadAllLines(@"8.txt");

            long product = 1, highest = 0;
            int operand, width = 13;
            int[] digits = new int[width], temp = new int[width];

            for (int i = 0; i <= rawLines[0].Length - width; i++)
            {
                for(int j = 0; j < width; j++)
                {
                    operand = (int) Char.GetNumericValue(rawLines[0][i + j]);
                    temp[j] = operand;

                    product *= operand;

                    if (product == 0) //increases efficiency by breaking the loop if it comes across a zero
                    {
                        i += j + 1;
                        j = width; //break
                    }
                }
                if (product > highest) 
                {
                    highest = product;
                    digits = temp;
                }
                product = 1;
                temp = new int[width];
            }

            Console.WriteLine($"highest product is {highest}, digits were [{string.Join("", digits)}]");

            Console.ReadKey();
        }
    }
}
