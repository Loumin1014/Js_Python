function expandedNums (num) {

  num = num.toString();
  const equation = [];
  let multiplier = 1;

  for(let i = 1; i<=num.length;i++)
  {
    const digit = num[num.length-i];
    digit > 0 && equation.unshift(digit + ' * '  +multiplier);
    multiplier*=10;
  }
  return console.log(equation.join(' + '));
}

expandedNums(568)
function anneeHumain(humanYears)
{

  if (humanYears == 1 )
  {
    catYears = dogYears = 15
  }
  else if (humanYears == 2 )
  {
    catYears = dogYears = 24
  }
  else
  {
    humanYearsModif = humanYears - 2
    catYears = (humanYearsModif4)+24
    dogYears = (humanYearsModif5)+24
  }
  return console.log("J'ai mes animaux depuis : " + humanYears + " ans. Mon chat a donc : "  + catYears + " ans. Et mon chien a : " + dogYears + " ans.")
}

anneeHumain(4)

function anneeAnimaux(Years)
{

  ownedCat = ownedDog = 0

  if(Years >= 24)
  {
    ownedCat = (Years-24)/4
    ownedCat=ownedCat+2
    ownedCat=Math.round(ownedCat)

    ownedDog = (Years-24)/5
    ownedDog=ownedDog+2
    ownedDog=Math.round(ownedDog)
  }

  else if((Years < 24) && (Years >=15))
  {
    ownedCat=ownedDog=2
  }

  else if(Years < 15)
  {
    ownedCat=ownedDog=1
  }

  return console.log('Je possede mon chat depuis : ' + ownedCat + ' ans' + ' et je possede mon chien depuis : ' + ownedDog + ' ans.')
}

anneeAnimaux(18)