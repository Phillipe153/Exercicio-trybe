// - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), 
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    
    return employees;
  };

  function createRegistration (name) {
      const nome = name;
      const email = `${name}@trybe.com`;
      const cadastro =[nome, email.split(' ').join('_')];
      return cadastro;
  }

 
  console.log(newEmployees(createRegistration));

  // 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

  const sorteio = (callback) => {
    const numeroSorteado = Math.ceil(Math.random()*(5-1)+1);
    console.log(`o numero sorteado é: ${numeroSorteado} \no numero escolhido é: ${callback}`);
    if (numeroSorteado === callback){ 
      return "Parabéns você ganhou"}
    else {  return "Tente novamente" };
    
  }

  const escolheNumero = () => {
    const numeroDaSorte = Math.ceil(Math.random()*(5-1)+1);
    return numeroDaSorte;
  }
  console.log(sorteio(escolheNumero()))

  // 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

  const corrigeRespostas = (gabarito, respostas, cont) => { 
        const resultado=  `O resultado final é  ${cont(gabarito, respostas)} !`;
        return resultado;
  }

  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; 

  const verficaResposta = (gabarito, respostas) => {
    let cont =0;
    for (let index = 0; index < gabarito.length; index +=1)
    {
      if (gabarito[index] === respostas[index]){cont +=1;}
      else if (gabarito[index] !== respostas[index]){cont -=0.5;}
      
    }
    return cont;
  }
  console.log(corrigeRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS, verficaResposta));