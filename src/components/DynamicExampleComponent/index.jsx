import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import sieveOfEratosthenesService from "../../services/sieveOfEratosthenesService";
import "./style.css";

const DynamicExampleComponent = ({ selectLang, step, currentPrimeArray }) => {
  const [finalNumber, setFinalNumber] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [arrayMultiples, setArrayMultiples] = useState([]);

  useEffect(() => {
    if (currentPrimeArray !== undefined && finalNumber === 0) {
      setFinalNumber(currentPrimeArray[currentPrimeArray.length - 1]);
      setFirstArray(currentPrimeArray);
    }
  }, [currentPrimeArray, finalNumber]);

  useEffect(() => {
    if (step === 1) {
      document
        .getElementById("firstStep")
        .scrollIntoView({ behavior: "smooth", block: "start" });

      setArrayMultiples(
        sieveOfEratosthenesService.countMultiples(
          currentPrimeArray[0],
          currentPrimeArray[currentPrimeArray.length - 1],
          3
        )
      );
    }
  }, [step, currentPrimeArray]);

  useEffect(() => {
    if (step === 2) {
      document
        .getElementById("secondStep")
        .scrollIntoView({ behavior: "smooth", block: "start" });

      setSecondArray(currentPrimeArray);
    }
  }, [step, currentPrimeArray]);

  useEffect(() => {
    if (step === 3) {
      document
        .getElementById("thirdStep")
        .scrollIntoView({ behavior: "smooth", block: "start" });

      setThirdArray(currentPrimeArray);
    }
  }, [step, currentPrimeArray]);

  return (
    <div className="exampleBody" id="exampleBody">
      <TransitionGroup>
        {(step === 1 || firstArray.length !== 0) && (
          <CSSTransition timeout={1000} classNames="messageout" key="1">
            <section className={step === 1 ? "minHeigthForCurrentStep" : ""}>
              <h3 id="firstStep">
                {!selectLang ? "First step" : "Primeiro passo"}
              </h3>
              <p>
                {!selectLang
                  ? `So we need to print all prime numbers smaller than or equal to ${finalNumber}.`
                  : `Precisamos imprimir todos os números até ${finalNumber}.`}
              </p>
              <div className="tableContainer">
                {firstArray.map((element) => (
                  <p className="tableItem">{element}</p>
                ))}
              </div>
              <p>
                {!selectLang
                  ? `To do this in JavaScript a function was built that receives the limit value entered by you and made the count and returned all the numbers in an array`
                  : `Para fazer isso em JavaScript foi construída uma função que recebe o valor limite digitado por você e fez a contagem e retornou todos os números em uma array`}
              </p>
              <div className="codeArea">
                <div className="linesCount">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                </div>
                <div className="codeBody">
                  <p>{"generateInitialArray(finalNumber) {"}</p>
                  <p>&nbsp;&nbsp;{"let array = [ ];"}</p>
                  <br />
                  <p>
                    &nbsp;&nbsp;
                    {"for (let index = 2; index <= finalNumber; index++) {"}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{"array.push(index);"}</p>
                  <p>&nbsp;&nbsp;{"}"}</p>
                  <br />
                  <p>&nbsp;&nbsp;{"return array;"}</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </section>
          </CSSTransition>
        )}

        {(step === 2 || secondArray.length !== 0) && (
          <CSSTransition timeout={1000} classNames="messageout" key="2">
            <section className={step === 2 ? "minHeigthForCurrentStep" : ""}>
              <h3 id="secondStep">
                {!selectLang ? "Second step" : "Segundo passo"}
              </h3>
              <p>
                {!selectLang
                  ? "According to the algorithm we will mark all the numbers which are divisible by 2 and are greater than or equal to the square of it."
                  : "De acordo com o algoritmo, marcaremos todos os números que são divisíveis por 2 e são maiores ou iguais ao quadrado do mesmo."}
              </p>
              <div className="tableContainer">
                {secondArray.map((element) => (
                  <p className="tableItem">{element}</p>
                ))}
              </div>
              <p>
                {!selectLang
                  ? "To do this part a function was made that receives the array of numbers previously generated by our code and goes through it looking for any number other than 2 and the rest after a division is equal to 0."
                  : "Para fazer essa parte foi feita uma função que recebe a array de números anteriormente gerada pelo nosso código e percorre toda ela procurando todo numero diferente de 2 e que o resto após uma divisão seja igual a 0."}
              </p>
              <div className="codeArea">
                <div className="linesCount">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                </div>
                <div className="codeBody">
                  <p>{"divisibleByTwo(primeArray) {"}</p>
                  <p>&nbsp;&nbsp;{"let array = [...primeArray];"}</p>
                  <br />
                  <p>&nbsp;&nbsp;{"array.forEach((number, index) => {"}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {"if (number % 2 === 0 && number !== 2) {"}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {"array.splice(index, 1);"}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
                  <p>&nbsp;&nbsp;{"});"}</p>
                  <p>&nbsp;&nbsp;{"return array;"}</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </section>
          </CSSTransition>
        )}

        {(step === 3 || thirdArray.length !== 0) && (
          <CSSTransition timeout={1000} classNames="messageout" key="3">
            <section className={step === 3 ? "minHeigthForCurrentStep" : ""}>
              <h3 id="thirdStep">
                {!selectLang ? "Third step" : "Terceiro passo"}
              </h3>
              <p>
                {!selectLang
                  ? "Now we move on to the next unmarked number 3 and we mark all numbers that are multiples of 3 and are greater than or equal to the square and we continue this process and our final table will be as below:"
                  : "Agora passamos para o próximo número não marcado, 3 e marcamos todos os números que são múltiplos de 3 e são maiores que ou iguais ao quadrado e continuamos esse processo com os próximos números não marcados até terminar a array e o resultado do algoritmo está abaixo com todos os números primos de 2 a 50."}
              </p>
              <div className="tableContainer">
                {thirdArray.map((element) => (
                  <p className="tableItem">{element}</p>
                ))}
              </div>
              <p>
                {!selectLang
                  ? "This part of the algorithm is a little more complex, but let's go."
                  : "Essa parte do algoritmo é um pouco mais complexa mas vamos lá."}
              </p>
              <p>
                {!selectLang
                  ? "To start this process we will make a function that will handle the loop that will go through the array."
                  : "Para iniciar esse processo vamos fazer uma função que irá lidar com o loop que irá percorrer a array."}
              </p>
              <div className="codeArea">
                <div className="linesCount">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                  <p>16</p>
                  <p>17</p>
                  <p>18</p>
                  <p>19</p>
                  <p>20</p>
                  <p>21</p>
                  <p>22</p>
                </div>
                <div className="codeBody">
                  <p>{`handleMultiples(primeArray, finalNumber) {`}</p>
                  <p>&nbsp;&nbsp;{`let array = [...primeArray];`}</p>
                  <p>&nbsp;&nbsp;{`let count = 0;`}</p>
                  <p>&nbsp;&nbsp;{`let countFor = array.length;`}</p>
                  <br />
                  <p>&nbsp;&nbsp;{`do {`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`if (array[count] !== 2) {`}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`array = sieveOfEratosthenesService.multiplesOf(`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`array,`}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`2,`}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`finalNumber,`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`array[count]`}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`);`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`count += 1;`}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`countFor = array.length;`}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`} else {`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`count += 1;`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</p>
                  <p>&nbsp;&nbsp;{`} while (count <= countFor);`}</p>
                  <br />
                  <p>&nbsp;&nbsp;{`return array;`}</p>
                  <p>{`}`}</p>
                </div>
              </div>
              <p>
                {!selectLang
                  ? "This function receives the array after filtering the number 2 and the limit number entered by you, because how are we going to deal with the multiples of a given number we have to generate a new set of data that are multiples of number x up to the limit number."
                  : "Essa função recebe a array após a filtragem do numero 2 e o numero limite digitado por você, por que como iremos lidar com os múltiplos de um determinado numero temos que gerar um novo conjunto de dados que são os múltiplos do numero x até o numero limite."}
              </p>
              <p>
                {!selectLang
                  ? "To deal with the loop we will need 2 counters which are count and countFor, these two variables served to limit the loop that will stop when the 2 are equivalent, as one will decrease and the other increase."
                  : "Para lidar com o loop vamos precisar de 2 contadores que são count e countFor, essas duas variáveis serviram para limitar o loop que irá parar quando os 2 se equivalerem, pois um vai diminuir e o outro aumentar."}
              </p>
              <p>
                {!selectLang
                  ? "Recalling that we should not consider the number 2 in this loop, so inside the loop an if was made that will go if it is 2 it will skip the action. If you enter the if we will use another function that will handle 1 array number at a time."
                  : "Lembrando que não devemos considerar o numero 2 nesse loop, por isso dentro do loop foi feito um if que irá caso for 2 ele irá pular a ação. Caso entre no if iremos usar uma outra função que irá lidar com 1 numero da array por vez."}
              </p>
              <div className="codeArea">
                <div className="linesCount">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                  <p>16</p>
                  <p>17</p>
                  <p>18</p>
                  <p>19</p>
                  <p>20</p>
                  <p>21</p>
                  <p>22</p>
                  <p>23</p>
                  <p>24</p>
                </div>
                <div className="codeBody">
                  <p>{`multiplesOf(array, initialNumber, finalNumber, multipliedNumber) {`}</p>
                  <p>&nbsp;&nbsp;{`let temp = [...array];`}</p>
                  <p>&nbsp;&nbsp;{`let arrayMultiples = [];`}</p>
                  <p>&nbsp;&nbsp;{`let arrayMultiplesFiltered;`}</p>
                  <br />
                  <p>
                    &nbsp;&nbsp;
                    {`for (let index = initialNumber; index <= finalNumber; index++) {`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`const result = index * multipliedNumber;`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;{`arrayMultiples.push(result);`}
                  </p>
                  <p>&nbsp;&nbsp;{`}`}</p>
                  <br />
                  <p>
                    &nbsp;&nbsp;
                    {`arrayMultiplesFiltered = sieveOfEratosthenesService.filterArrayMultiples(`}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`temp,`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`arrayMultiples,`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`finalNumber`}</p>
                  <p>&nbsp;&nbsp;{`);`}</p>
                  <br />
                  <p>
                    &nbsp;&nbsp;
                    {`temp = sieveOfEratosthenesService.takeOfMultiples(`}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`temp,`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`arrayMultiplesFiltered,`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`multipliedNumber`}</p>
                  <p>&nbsp;&nbsp;{`);`}</p>
                  <br />
                  <p>&nbsp;&nbsp;{`return temp;`}</p>
                  <p>{`}`}</p>
                </div>
              </div>
              <p>
                {!selectLang
                  ? "The multiplesOf function will receive 4 arguments, the current prime array, the initial value that will be the smallest prime number which is number 2, the limit number and the number that will have its multiples checked."
                  : "A função multiplesOf irá receber 4 argumentos, a array de primos atual, o valor inicial que vai ser o menor numero primo que é o numero 2, o numero limite e o numero que terá seus múltiplos conferidos."}
              </p>
              <p>
                {!selectLang
                  ? "The first part of this function is to generate an array of the same size as the original array that would be from number 2 to 50 containing only the multiples ie 2xX, 3xX, 4xX ....."
                  : "A primeira parte dessa função é gerar uma array do mesmo tamanho da array original que seria do numero 2 a 50 contendo apenas os múltiplos ou seja 2xX,3xX,4xX....."}
              </p>
              <p>
                {!selectLang
                  ? "Let's use the example of number 3, which is the first existing number after number 2."
                  : "Vamos usar o exemplo do numero 3, que é o primeiro numero existente após o numero 2."}
              </p>
              <div className="tableContainer">
                {arrayMultiples.map((element) => (
                  <p className="tableItem">{element}</p>
                ))}
              </div>
              <p>
                {!selectLang
                  ? "With the result of the multiple array we have to clear it, because if our limit number is 50 or if the number no longer exists in the array of primes, there is no reason why keep those numbers."
                  : "Com o resultado da array de múltiplos temos que limpar ela, pois se nosso numero limite é 50 ou se o numero já não existe na array de primos não tem porque manter esses numeros."}
              </p>
              <div className="codeArea">
                <div className="linesCount">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                </div>
                <div className="codeBody">
                  <p>{`filterArrayMultiples(array, arrayMultiples, finalNumber) {`}</p>
                  <p>&nbsp;&nbsp;{`let temp = [...arrayMultiples];`}</p>
                  <br />
                  <p>&nbsp;&nbsp;{`let result = temp.map(number => {`}</p>
                  <p>
                    &nbsp;&nbsp;
                    {`return finalNumber > number && array.includes(number) && number;`}
                  </p>
                  <p>{`});`}</p>
                  <br />
                  <p>{`result = result.filter(number => number !== false);`}</p>
                  <br />
                  <p>{`return result;`}</p>
                  <p>{`}`}</p>
                </div>
              </div>
              <p>
                {!selectLang
                  ? "After filtering the array of multiples we will remove the numbers from the array of primes."
                  : "Após filtrar a array de múltiplos iremos retirar os números da array de primos."}
              </p>
              <div className="codeArea">
                <div className="linesCount">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                  <p>6</p>
                  <p>7</p>
                  <p>8</p>
                  <p>9</p>
                  <p>10</p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                </div>
                <div className="codeBody">
                  <p>{`takeOfMultiples(array, arrayMultiples, multipliedNumber) {`}</p>
                  <p>&nbsp;&nbsp;{`let temp = [...array];`}</p>
                  <br />
                  <p>
                    &nbsp;&nbsp;
                    {`for (let current = 0; current < arrayMultiples.length; current++) {`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {`temp.forEach((number, index) => {`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`if (number === arrayMultiples[current] && number !== multipliedNumber) {`}
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {`temp.splice(index, 1);`}
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`});`}</p>
                  <p>&nbsp;&nbsp;{`}`}</p>
                  <br />
                  <p>{`return temp;`}</p>
                  <p>{`}`}</p>
                </div>
              </div>
              <p>
                {!selectLang
                  ? "And finally, after doing these procedures we will arrive at the result."
                  : "E por fim, após fazer esses procedimentos iremos chegar no resultado."}
              </p>
              <div className="tableContainer">
                {thirdArray.map((element) => (
                  <p className="tableItem">{element}</p>
                ))}
              </div>
            </section>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default DynamicExampleComponent;
