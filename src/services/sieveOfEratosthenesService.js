const sieveOfEratosthenesService = {
  generateInitialArray(finalNumber) {
    let array = [];

    for (let index = 2; index <= finalNumber; index++) {
      array.push(index);
    }

    return array;
  },
  divisibleByTwo(primeArray) {
    let array = [...primeArray];

    array.forEach((number, index) => {
      if (number % 2 === 0 && number !== 2) {
        array.splice(index, 1);
      }
    });
    return array;
  },
  handleMultiples(primeArray, finalNumber) {
    let array = [...primeArray];
    let count = 0;
    let countFor = array.length;

    do {
      if (array[count] !== 2) {
        array = sieveOfEratosthenesService.multiplesOf(
          array,
          2,
          finalNumber,
          array[count]
        );
        count += 1;
        countFor = array.length;
      } else {
        count += 1;
      }
    } while (count <= countFor);

    return array;
  },
  multiplesOf(array, initialNumber, finalNumber, multipliedNumber) {
    let temp = [...array];
    let arrayMultiples = [];
    let arrayMultiplesFiltered;

    for (let index = initialNumber; index <= finalNumber; index++) {
      const result = index * multipliedNumber;
      arrayMultiples.push(result);
    }

    arrayMultiplesFiltered = sieveOfEratosthenesService.filterArrayMultiples(
      temp,
      arrayMultiples,
      finalNumber
    );

    temp = sieveOfEratosthenesService.takeOfMultiples(
      temp,
      arrayMultiplesFiltered,
      multipliedNumber
    );

    return temp;
  },
  filterArrayMultiples(array, arrayMultiples, finalNumber) {
    let temp = [...arrayMultiples];

    let result = temp.map((number) => {
      return finalNumber > number && array.includes(number) && number;
    });

    result = result.filter((number) => number !== false);

    return result;
  },
  takeOfMultiples(array, arrayMultiples, multipliedNumber) {
    let temp = [...array];

    for (let current = 0; current < arrayMultiples.length; current++) {
      temp.forEach((number, index) => {
        if (number === arrayMultiples[current] && number !== multipliedNumber) {
          temp.splice(index, 1);
        }
      });
    }

    return temp;
  },
};

export default sieveOfEratosthenesService;
