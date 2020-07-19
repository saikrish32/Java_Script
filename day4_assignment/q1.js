//question1

for(i=1;i<101;i++)
{
    if (i%3==0 && i%5==0)
    {
       console.log('fizzbuzz')
    }
    else if (i%3==0)
    {
        console.log('fizz')
    }
    else if (i%5==0)
    {
       console.log('buzz')
    }
}

//question 2
console.log('---------question2-----------------')
const student = {
    name : 'Helsinki',
    age : 24,
    projects : {
        diceGame : "Two player dice game using JavaScript"
    }
}

console.log(student.name);
console.log(student.age);
console.log(student.projects.diceGame);

console.log('---------question3-----------------')
//question3

let shoppingList = ['Apple','Mango','Pen','Brush','choclates'];
let shoppingBasket = [...shoppingList,'Rice','Oil'];

console.log(shoppingBasket);


console.log('---------question4-----------------')
//question4
/*
let [num1,num2] = prompt('Enter the two numbers seperated by space to perform maths operation').split(' ');

let math_operation = +prompt('press their keys for operations 1 : + ,    2 : -,   3 : /,     4 : squareroot,     5 : %');


if (math_operation == 1)
{
    console.log(+num1 + +num2);
}
else if (math_operation == 2)
{
    console.log(+num1 - +num2);
}
else if (math_operation == 3)
{
    console.log(+num1 / +num2);
}
else if (math_operation == 4)
{
    console.log((+num1)**(1/2));
}
else if (math_operation == 5)
{
    console.log((+num1*(+num2/100)));
}

*/


console.log('---------question5-----------------')

/*
let sales = +prompt('Enter the amount you sales')

if (sales <= 5000 )
{
    console.log(`your comminsion is ${sales*0.02}`)
}
else if (sales <= 10000 )
{
    console.log(`your comminsion is ${sales*0.05}`)
}
else if (sales <= 20000 )
{
    console.log(`your comminsion is ${sales*0.07}`)
}
else if (sales <= 10000 )
{
    console.log(`your comminsion is ${sales*0.1}`)
}
*/


console.log('---------question6-----------------');

/*
let age;
while (true)
{
age = +prompt('enter the number');
console.log(age > 100 ? age = 0 : age=age);
if (age==0)
{
    break;
}

}
*/

console.log('---------question7-----------------');
/*
let range = +prompt('Enter the number to get prime number');
let count;
for(i=2;i<=range;i++)
{
    count = 0;
    for(j=2;j<i;j++)
    {
        if (i%j==0)
        {
            count = 1;
            break;
        }
    }
    if (count == 0)
    {
        console.log(i);
    }
}
*/

console.log('---------question8-----------------');

let ask = (question,yes,no) => confirm(question)?yes():no();

ask('Do Yoy agreee?',function()
{
    alert('you agreed');
},
function()
{
   alert('you canceled the execution?..')
}
)
result = result_arrow(10,20);
console.log(result);
