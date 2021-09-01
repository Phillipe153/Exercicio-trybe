      // Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
      testingScope = (escopo) => {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
          return console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          return console.log(elseScope);
        }
      }

      testingScope(true);

    //Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente  

      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      oddsAndEvens.sort((a, b) => a -b )
      
      console.log(oddsAndEvens); // será necessário alterar essa linha 😉

      //Parte II
      //Crie uma função que receba um número e retorne seu fatorial.

      retornaFatorial = (number) => {
        let fatorial = 1;
        if (number === 0){return 1;}
        else {
        for (let index = 1; index <= number;index += 1)
        {
          fatorial = fatorial*index;
        }
        return fatorial;
      }        
      }

      
      console.log(retornaFatorial(0));
      console.log(retornaFatorial(4));
      console.log(retornaFatorial(5));

      //Crie uma função que receba uma frase e retorne qual a maior palavra.

      retornaMaiorPalavra = (frase) => {
        const myArray = frase.split (' ');
        let maior = ' ';
        for (let index= 0;index < myArray.length; index +=1 )
        {
         
         if ( myArray[index].length > maior.length) {
           maior = myArray[index]}
         
        }
        return maior;
       

      } 

      console.log(retornaMaiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

      //Crie uma página que contenha:

      // let clickCount = 0
      // const button = document.getElementById('botao');
      // const click = document.getElementById('clicks');

        contadorDeClicks =() => {        
        clickCount  += 1; 
        console.log(clickCount);
        click.innerHTML = clickCount;
        

      }

      // button.addEventListener('click', contadorDeClicks);

      // Crie um código JavaScript com a seguinte especificação:
      //Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

      
      complete = (frase, nome) => {
        const myArray = frase. split (" ");
        for (let index = 0; index < myArray.length; index +=1)
        {
          if (myArray[index] === 'x') { 
            myArray[index] = nome;
          }
        }
        return myArray.join (' ')
      }

      const funçao1 = (complete('tryber x aqui', "Phillipe"));

      //Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

      const skills = ['JavaScript', 'HTML', 'CSS', 'Testes unitários', 'React']
      

      // Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .


      concat = (frase1, habilidades) => {
        console.log(`${frase1}! Minhas cinco principais habilidades são: ${habilidades.sort( )} `)
      }

      concat (funçao1, skills)





