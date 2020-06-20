import React, { useEffect } from "react";
import "./style.css";

function InfoComponent({ selectLang }) {
  const brInfo = `<section>
  <div class="sectionTitle">
    <h2>Resumo</h2>
  </div>
  <div class="sectionBody">
    <p>
      O Crivo de Erastóstenes é um algoritmo e um método simples e prático para encontrar números primos até um certo valor limite.
    </p>
    <p>
      Faz isso marcando iterativamente como composto (isto é, não primo) os múltiplos de cada primo, começando com o primeiro número primo, 2.
    </p>
    <p>
      Os múltiplos de um dado primo são gerados como uma sequência de números começando desse primo, com diferença constante entre eles igual a esse primo.
    </p>
    <p>
      Essa é a principal distinção da peneira do uso da divisão de tentativa para testar sequencialmente cada número candidato de divisibilidade por cada primo.
    </p>
  </div>
  </section>
  <section>
  <div class="sectionTitle">
    <h2>Visão geral</h2>
  </div>
  <div class="sectionBody">
    <p>
      Um número primo é um número natural que possui exatamente dois divisores de números naturais distintos: o número 1 e ele próprio.
    </p>
    <p>
      Para encontrar todos os números primos menores ou iguais a um número inteiro <strong>n</strong> pelo método de Eratóstenes:
    </p>
    <ol>
      <li>
        Crie uma lista de números inteiros consecutivos de <strong>2 a n: (2, 3, 4, ..., n)</strong>.
      </li>
      <li>
        Inicialmente, seja <b><strong>p</strong> igual a 2</b>, o menor número primo.
      </li>
      <li>
        Enumere os múltiplos de <strong>p</strong> contando em incrementos de 
        p de <strong>2p para n</strong> e marque-os na lista 
        (estes serão <b>2p, 3p, 4p</b>, ...; o próprio <strong>p</strong> não deve ser marcado).
      </li>
      <li>
        Encontre o primeiro número maior que <strong>p</strong> na lista que não está marcada. 
        Se não houver esse número, pare.
        Caso contrário, deixe <strong>p</strong> agora igualar esse novo número (que é o próximo primo) 
        e repita da etapa 3.
      </li>
      <li>
       Quando o algoritmo termina, os números restantes não marcados na lista 
       são todos os números primos abaixo de <strong>n</strong>.
      </li>
    </ol>
    <p>
    A ideia principal aqui é que todo valor dado a <strong>p</strong> será primo, 
    porque, se fosse composto, seria marcado como um múltiplo de algum 
    outro primo menor.
    </p>
    <p>
    Observe que alguns dos números podem ser marcados mais de uma vez (por exemplo, 15 serão marcados para 3 e 5).
    </p>
  </div>
  </section>
  <section>
  <div class="sectionTitle">
    <h2>Explicação com Exemplos</h2>
  </div>
  <div class="sectionBody">
    <p>
    Conforme explicado na visão geral esse algoritmo serve para encontrar os números primos dentro de um conjunto de números determinados, como regra sempre
    iniciaremos a contagem a partir do numero 2 que é o menor numero primário. 
    </p>
  </div>
  </section>`;
  const enInfo = `<section>
<div class="sectionTitle">
  <h2>Resume</h2>
</div>
<div class="sectionBody">
  <p>
    Sieve of Erastostenes is an algorithm and a simple and practical
    method to find prime numbers up to a certain limit value.
  </p>
  <p>
    It does this by iteratively marking as multiples (that is, not
    prime) the multiples of each prime, starting with the first prime
    number, 2.
  </p>
  <p>
    Multiples of a given prime are generated as a sequence of numbers
    starting from that prime, with a constant difference between them
    equal to that prime.
  </p>
  <p>
    This is the main distinction of the sieve of using the tentative
    division to test each candidate number of divisibility by each prime
    sequentially.
  </p>
</div>
</section>
<section>
<div class="sectionTitle">
  <h2>Overview</h2>
</div>
<div class="sectionBody">
  <p>
    A prime number is a natural number that has exactly two divisors of
    distinct natural numbers: the number 1 and itself.
  </p>
  <p>
    To find all prime numbers less than or equal to an integer 
    <strong>n</strong> by the method of Eratosthenes:
  </p>
  <ol>
    <li>
      Create a list of consecutive integers from 
      <strong>2 to n: (2, 3, 4, ..., n).</strong>
    </li>
    <li>
      Initially, let 
      <b>
        <strong>p</strong> be equal to 2
      </b>
      , the smallest prime number.
    </li>
    <li>
      List the multiples of <strong>p</strong> counting in increments of
      p from <strong>2p to n </strong>
      and mark them in the list (these will be <b>2p, 3p, 4p</b>, ...; 
      <strong>p</strong> itself must not be marked).
    </li>
    <li>
      Find the first number greater than <strong>p</strong> in the
      unchecked list. If there is no such number, stop. Otherwise, let 
      <strong>p</strong>
      now match this new number (which is the next prime) and repeat
      from step 3.
    </li>
    <li>
      When the algorithm ends, the remaining unmarked numbers in the
      list are all prime numbers below <strong>n</strong>.
    </li>
  </ol>
  <p>
    The main idea here is that every value given to <strong>p</strong> 
    will be a prime, because if it were composed, it would be marked as
    a multiple of some other smaller prime.
  </p>
  <p>
    Note that some of the numbers can be dialed more than once (for
    example, 15 will be dialed for 3 and 5).
  </p>
</div>
</section>
<section>
<div class="sectionTitle">
  <h2>Explanation with Example</h2>
</div>
<div class="sectionBody">
  <p>
    As explained in the overview, this algorithm serves to find prime
    numbers within a set of determined numbers, as a rule always we will
    start counting from number 2 which is the smallest primary number.
  </p>
</div>
</section>`;

  useEffect(() => {
    const infoComponentBody = document.querySelector("#infoComponentBody");

    if (!selectLang) {
      infoComponentBody.innerHTML = "";
      infoComponentBody.innerHTML = enInfo;
    } else {
      infoComponentBody.innerHTML = "";
      infoComponentBody.innerHTML = brInfo;
    }
  }, [selectLang, brInfo, enInfo]);

  return <div id="infoComponentBody"></div>;
}

export default InfoComponent;
