//Вывод чисел от 25 до 0 (порядок уменьшения)


function count25While() {
  let counter = 25;
  while (counter >= 0) {
    console.log(counter--);
  }
}

function count25DoWhile() {
  let counter = 25;
  do {
    console.log(counter--);
  } while (counter >= 0)
}

function count25For() {
  for (counter = 25; counter >= 0; counter--) {
    console.log(counter)
  }

}


//Вывод чисел от 10 до 50, которые кратны 5

function multples5While() {
  let num = 9;
  while (num <= 50) {
    num++;

    if (num % 5 === 0) {
      console.log(num);
    }
    else {
      continue;
    }
  }
}

function multples5DoWhile() {
  let num = 9;
  do {
    num++;

    if (num % 5 === 0) {
      console.log(num);
    }
    else {
      continue;
    }
  } while (num <= 50);

}

function multples5For() {
  for (num = 10; num <= 50; num++) {
    if (num % 5 === 0) {
      console.log(num);
    }
    else {
      continue;
    }
  }
}

// Найти сумму чисел в пределах от 1 до 100.

function sumHundredWhile() {
  let counter = 0;
  let sum = 0;
  while (counter < 100) {
    sum += ++counter;
  }
  console.log(sum);
}

function sumHundredDoWhile() {
  let counter = 0;
  let sum = 0;
  do {
    sum += ++counter;
  } while (counter < 100)
  console.log(sum);
}

function sumHundredDFor() {
  let sum = 0;
  for (counter = 0; counter <= 100; counter++) {
    sum += counter;
  }
  console.log(sum);
}

//предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

function userSolveExampleWhile() {
  while (true) {
    let userSolve = +prompt('Solve: 2 + 2 * 2');

    if (userSolve === 6) {
      return true;
    }
  }
}

function userSolveExampleDoWhile() {
  do {
    let userSolve = +prompt('Solve: 2 + 2 * 2');

    if (userSolve === 6) {
      return true;
    }

  } while (true);
}

function userSolveExampleFor() {
  for (counter = 0; true; counter++) {
    let userSolve = +prompt('Solve: 2 + 2 * 2');

    if (userSolve === 6) {
      return true;
    }

  }
}