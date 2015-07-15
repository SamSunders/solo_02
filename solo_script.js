// ! ! !
// Three Bugs - Samantha Sunders
// 07 - 15-15

// The first thing I did was remove the two un-nessasary function calls in the bonus variable declaration.
// so that would justl read var bonus = getBaseSTI(reviewScore);

// I then added baseSalary = parseInt(baseSalary); to change the baseSalary into a integer so it would
// be able to be used in math.

// Next I changed the newArray[2]to newArray[2] = baseSalary + (baseSalary * bonus);

// Then I removed the -1 in the return basePercent within the getBaseSTI

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
//console.log("This is the array at first " +array);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
  newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}
//console.log("The base array " + array);

function calculateSTI(array){
  var newArray = [];

  //console.log("The new array should be empty " + newArray);
  newArray[0] = array[0];
  //console.log("the 1st index in new array " +newArray[0][0]);

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];
 // console.log("This is the employeeNumber " + employeeNumber);
  //console.log("This is the baseSalary " + baseSalary);

  var bonus = getBaseSTI(reviewScore); // + getYearAdjustment(employeeNumber) - 
  //getIncomeAdjustment(baseSalary);
  

  if(bonus > 0.13){
    bonus = 0.13;
  } // end if statement
  baseSalary = parseInt(baseSalary);
  newArray[1] = bonus;
  newArray[2] = baseSalary + (baseSalary * bonus);
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  newArray= newArray.join(', ');
  return newArray;

} // end calculatesSTI functin

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; // - 1;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}