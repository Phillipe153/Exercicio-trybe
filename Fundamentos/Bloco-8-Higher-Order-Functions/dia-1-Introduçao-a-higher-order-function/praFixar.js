const wakeUp = () => {
    return "Acordando!"
}

const brakfast = () => {
  return  "Bora tomar café!!"
}

const goingSleep = () => "Partiu dormir!!"

function doingThings (fun) {
   return console.log(fun());
}
doingThings(brakfast);
doingThings(wakeUp);

doingThings(goingSleep);


