// Your code here
function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity= "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*"){
    return function(word="special"){
      return `You are ${flair + word + flair}!`
    }
  }
  
  const Calculator = {
    add: function(){ return 1 + 3 },
    subtract: function(){ return 1 - 3 },
    multiply: function(){ return 1 * 3 },
    divide: function(){ return 10 / 5 },
  }
  
  function actionApplyer(int, array){
    if (array.length === 0){
      return int 
    }
  
    array.map( func => int = func(int))
  
    return int
  
  }
  