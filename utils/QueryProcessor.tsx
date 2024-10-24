export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "ntali" );
  }

  if (query.toLowerCase().includes("name")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "ntali-313" );
  }

  // if (query.toLowerCase().includes("numbers is the largest:")) {
    
  //   const matchedNumbers = query.match(/\d+/g);
  //   if (matchedNumbers) {
  //     const numbers: number[] = matchedNumbers.map(Number);
  //     const largestNumber = Math.max(...numbers); // Find the largest number
  //     return largestNumber.toString();

  //   }
  //   return "";

  // }

  // if (query.toLowerCase().includes("plus")) {
  //   const matchedNumbers = query.match(/\d+/g); // Extract all numbers from the query

  //   if (matchedNumbers && matchedNumbers.length >= 2) {
  //     const numbers: number[] = matchedNumbers.map(Number); // Convert the matched strings to numbers
  //     const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Sum the first two numbers
  //     return sum.toString();
  //   } 
  //   return ""
  // }

  // if (query.toLowerCase().includes("multiplied")) {
  //   const matchedNumbers = query.match(/\d+/g); // Extract all numbers from the query

  //   if (matchedNumbers && matchedNumbers.length >= 2) {
  //     const numbers: number[] = matchedNumbers.map(Number); // Convert the matched strings to numbers
  //     const sum = numbers.reduce((acc, curr) => acc * curr, 1); // multiply the first two numbers
  //     return sum.toString();
  //   } 
  //   return ""
  // }

  // if (query.toLowerCase().includes("square and a cube")) {
  //   const matchedNumbers = query.match(/\d+/g); // Extract all numbers from the query

  //   if (matchedNumbers) {
  //     const numbers: number[] = matchedNumbers.map(Number); // Convert the matched strings to numbers
  
  //     for (const num of numbers) {
  //       const sqrt = Math.sqrt(num);
  //       const cubeRoot = Math.cbrt(num);
  
  //       if (Math.floor(sqrt) === sqrt && Math.floor(cubeRoot) === cubeRoot) {
  //         return num.toString(); // Return the first number that satisfies the condition
  //       }
  //     }
  //   }
  // }
return "";
}


