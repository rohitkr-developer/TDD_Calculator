class StringCalculator {
    add(numbers) {
      if (numbers === "") {
        return 0;
      }
  
      let delimiter = ",";
      if (numbers.startsWith("//")) {
        const delimiterIndex = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterIndex);
        numbers = numbers.substring(delimiterIndex + 1);
      }
  
      let numArr = numbers.split(new RegExp(`[${delimiter}\n]`));
      let negatives = numArr.filter(num => parseInt(num) < 0);
  
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
      }
  
      return numArr.reduce((sum, num) => sum + parseInt(num), 0);
    }
  }
  
  module.exports = StringCalculator;
  