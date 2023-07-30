console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  
  // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  
    if (age >= 16) {
      console.log(aboveSixteen);
    } else {
      console.log(belowSixteen);
    }
  }
  


// Exercise 3 Section

function checkCoordinates(x, y) {
    if (x === 0 && y === 0) {
      console.log("(0, 0) is the origin.");
    } else if (x === 0) {
      console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
      console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else {
      console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
  }
  

  // Exercise 4 Section

  function checkTriangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      return "Invalid triangle: The sides do not form a valid triangle.";
    } else if (side1 === side2 && side1 === side3) {
      return "Equilateral triangle: All side lengths are equal.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle: Two side lengths are equal.";
    } else {
      return "Scalene triangle: All side lengths are different.";
    }
  }
  
  
// Exercise 5 Section

function dataUsageFeedback(planLimit, day, usage) {
  const daysRemaining = 30 - day;
  const averageDailyUse = usage / day;
  const remainingData = planLimit - usage;
  const projectedExcessData = averageDailyUse * daysRemaining - remainingData;

  console.log(`${day} days used, ${daysRemaining} days remaining`);
  console.log(`Average daily use: ${averageDailyUse.toFixed(3)} GB/day`);

  if (averageDailyUse > planLimit) {
    console.log(`You are EXCEEDING your average daily use (${averageDailyUse.toFixed(3)} GB/day),`);
    console.log(`continuing this high usage, you'll exceed your data plan by ${projectedExcessData.toFixed(1)} GB.`);
    console.log(`To stay below your data plan, use no more than ${(planLimit - (remainingData / daysRemaining)).toFixed(3)} GB/day.`);
  } else {
    console.log(`You are using data efficiently!`);
    console.log(`You have ${remainingData.toFixed(1)} GB remaining.`);
    console.log(`You can afford to use ${(remainingData / daysRemaining).toFixed(3)} GB/day for the rest of the month.`);
  }
}


