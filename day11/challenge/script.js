function alwaysHungry(arr) {
    let foundFood = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "food") {
        console.log("yummy");
        foundFood = true;
      }
    }
    if (!foundFood) {
      console.log("I'm hungry");
    }
  }
  
  alwaysHungry([3.14, "food", "pie", 9, "food"]); 
  alwaysHungry([4, 1, 5, 7, 2]); 
  
  function highPass(arr, cutoff) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  
  let result4 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
  console.log(result4); 





function betterThanAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let avg = sum / arr.length;
  
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > avg) {
        count++;
      }
    }
    return count;
  }
  
  let result5 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
  console.log(result5); 
  




function fibonacciArray(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr;
  }
  
  let result3 = fibonacciArray(10);
  console.log(result3)   

  
  function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
    }
    return arr;
}



let result6 = reverse(["a", "b", "c", "d", "e"]);
console.log(result6);