{/*
    public class Tarun {
    
    // Function to calculate the difference between sum of elements at odd and even indices
    public static int findDifference(int[] numbers) {
        int evenIndexSum = 0;  // To store the sum of elements at even indices
        int oddIndexSum = 0;   // To store the sum of elements at odd indices
        int n = numbers.length;  // Length of the array

        // Loop through the array and calculate the sums for odd and even indices
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) {  // If the index is even
                evenIndexSum += numbers[i];
            } else {  // If the index is odd
                oddIndexSum += numbers[i];
            }
        }

        // Return the difference between the sum of elements at odd indices and even indices
        return oddIndexSum - evenIndexSum;
    }

    public static void main(String[] args) {
        // Example array
        int[] numbers = {1, 2, 3, 4, 5, 6};

        // Call the findDifference function
        int result = findDifference(numbers);
        
        // Print the result
        System.out.println("The difference between the sum of elements at odd and even indices is: " + result);
    }
}

*/}