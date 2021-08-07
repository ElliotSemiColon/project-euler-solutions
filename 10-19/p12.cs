using System;

namespace p12
{
    class Program
    {
        static int Factors(long n) {

            if(n == 1) { return 1; }

            double sqrt = Math.Sqrt(n);

            int factors = 2; //1, n

            for(int i = 2; i < sqrt; i++) //number need only be divided up to its sqrt. 
            //if we check it's divisible by a number larger than its sqrt, its other factor would be smaller than its sqrt, thus we would have already checked it (wasted operations)
            {
                if(n % i == 0) { factors += 2; }
            }

            if(sqrt - Math.Floor(sqrt) == 0) { factors++; } //if n is a square number it has its sqrt as a factor

            return factors;
        }

        static void Main(string[] args)
        {
            long i = 1, n = 0, factors = 0, max = 0;

            while (true)
            {
                n = (long)Math.Round(0.5 * ((i * i) + i)); //value of ith triangle number
                factors = Factors(n);
                max = Math.Max(max, factors);

                if (i % 1000 == 0) { Console.WriteLine($"{n}, {i}, max factors so far {max}"); }

                if (Factors(n) > 500) { break; }

                i += 1;
            }

            //Console.WriteLine(Factors(64));

            Console.WriteLine(n);

            Console.ReadKey();
        }
    }
}
