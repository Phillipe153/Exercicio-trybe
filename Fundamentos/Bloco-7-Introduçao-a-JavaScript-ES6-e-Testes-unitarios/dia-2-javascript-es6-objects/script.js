const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, N: ${order.address.number}, AP: ${order.address.apartment}`)
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.delivery.deliveryPerson = "Izabella Laiz"
    order.payment.total= 50;
    console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu  de  marguerita, pepperoni e ${order.order.drinks.coke.type} é ${order.payment.total} `)
  }
  
  orderModifier(order);

  //Parte II
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  }
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  adicionaTurno = (object, key, value) => {
    object[key]= value;

  }
  adicionaTurno (lesson2, "turno", 'noite');
  console.log(lesson2);

  //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro

  listarChaves = (object) => {
    return Object.keys(object);

  }

  console.log(listarChaves(lesson2));

  //Crie uma função para mostrar o tamanho de um objeto.

  mostraTamanho = (object) => {
    return Object.keys(object).length;
  }

 console.log(mostraTamanho(lesson3));

 //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

 listarChaves = (object) => {
  return Object.values(object);

}

console.log(listarChaves(lesson3));

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas

numeroDeEstudantes = (param) => {
  let cont = 0;
  const array = Object.keys(param)
  for (let index =0; index<Object.keys(param).length; index +=1)
  {
    cont += param[array[index]].numeroEstudantes;

   }
   return cont;
  } 
  
console.log(numeroDeEstudantes(allLessons))

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

keyValue =(param1, param2) => {
  const valores =Object.values(param1)[param2]
  return valores;
}

console.log(keyValue(lesson2, 0));
console.log(keyValue(lesson3, 1));
console.log(keyValue(lesson2,2))

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

verifyPair = (param1, param2, param3) => {
   if (param1[param2] == param3 ) {return true}
  else { return false};
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false