let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente='Sim';
/*
console.log("Bem-vinda, "+info.personagem);

info.recorrente='sim';

console.log(info);

for (let key in info)
{
    console.log(key);
}

for (let key in info)
{
    console.log(info[key]);
}
*/
/*let info2 = info;

console.log (info2);

info2.personagem=info2.personagem+' e Tio Patinhas';
console.log(info2.personagem);
info2.origem=info.origem + " e Christmas on Bear Mountain, Dell's Four Color Comics #178"
console.log(info2.origem);
info2.nota=info.nota + " e O último MacPatinhas";
console.log(info2);
*/
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}