
let a = parseFloat(prompt("Enter variable a: "));
let b = parseFloat(prompt("Enter variable b: "));

//console.log(typeof(a)); // izvāda mainīga a t
//console.log(typeof(b));
let result;
let operators = prompt("Enter operator:");

while(turpināt)

switch(operators)
{
    case"+":
    result = a+b;
    break;

    case"-":
    result = a-b;
    break;

    case"*":
    result = a*b;
    break;

    case"/":
    if (b !=0)
    {
        result - a / b;
    }
    else
    {
        console.error("b = 0");
    }
    break;

    result = a/b;
    break;

    case"!":
    for(let i =1; i <= a ; i ++)
    {
        //result = result * i;
        result *=i;
   break;
 }
}


result= a + b;
console.log("Result:" ,result);