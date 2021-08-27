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

      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      oddsAndEvens.sort((a, b) => {
        if (a>b) return 1;
        if (a<b) return -1;
        return 0;
      })
      
      console.log(oddsAndEvens); // será necessário alterar essa linha 😉