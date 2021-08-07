using System;
using System.IO;

namespace p13
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] sequence = File.ReadAllLines(@"B:\Elliot Buckingham\Documents\Visual Studio 2019\repos\project-euler\project-euler\13.txt");

            //Console.WriteLine($"file data:\n{string.Join("\n", sequence)}");

            ulong sum = 0, n = 0;
            int precision = 15; //how many digits to add per number

            foreach (string line in sequence)
            {
                n = ulong.Parse(line.Substring(0, precision)); 
                sum += n;
            }

            Console.WriteLine(sum);

            Console.ReadKey();
        }
    }
}
