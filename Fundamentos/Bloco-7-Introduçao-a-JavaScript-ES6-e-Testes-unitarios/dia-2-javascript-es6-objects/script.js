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
