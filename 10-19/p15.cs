using System;

namespace p15
{
    class Program
    {
        static long Paths(int size)
        {
            //left is the adjacent left node, previous row stores the values of all nodes in the row above the current node
            long total = size + 1, left = 1, node = 0;
            long[] previousRow = new long[size];

            //generate first row
            previousRow[0] = 2;
            for(int x = 1; x < size; x++)
            {
                previousRow[x] = 1;
            }

            for(int j = 1; j < size; j++) //vertical
            {
                for (int i = 1; i < size; i++) //horizontal
                {
                    node = left + previousRow[i];
                    //Console.WriteLine(node);

                    previousRow[i] = left = node;

                    total += node;
                }

                left = 1;
                total++;
            }

            return total;
        }

        static void Main(string[] args)
        {

            Console.WriteLine(Paths(20));

            Console.ReadKey();
        }
    }
}
