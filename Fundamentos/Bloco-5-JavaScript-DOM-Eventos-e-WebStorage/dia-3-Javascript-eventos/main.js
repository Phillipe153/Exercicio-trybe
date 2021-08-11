const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

 */
console.log('test');
function AdicionaClasseTech (event)
{
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value='';
} 
firstLi.addEventListener('mouseover', AdicionaClasseTech);
secondLi.addEventListener('mouseover', AdicionaClasseTech);
thirdLi.addEventListener('mouseover', AdicionaClasseTech);
/*

 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
*/

function changeText (event)
{
  techElement = document.querySelector('.tech');
  techElement.innerText=event.target.value;
}
input.addEventListener('input',changeText);
/*
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
*/
function dubleClick ()
{
  window.location.replace("https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos/17f2fe86-921e-4e5c-ba08-b6ac47bec409/conteudos/07c856b4-2030-4a9e-8731-860c6f7ea996/parte-ii-conheca-o-addeventlistener/3e93800d-4c5d-4424-807c-e18293dc3b16?use_case=next_button");
}
myWebpage.addEventListener('dblclick',dubleClick);
/*
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/
function changeColorRed(event)
{
  event.target.style.color="red";
}
myWebpage.addEventListener('mouseover',changeColorRed);
function changeColorWhite(event)
{
  event.target.style.color="white";
}
myWebpage.addEventListener('mouseleave',changeColorWhite);

/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.