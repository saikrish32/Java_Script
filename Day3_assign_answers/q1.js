let num = +prompt("Enter some number to check even or not")

function even_or_odd(num)
{
    if (num%2==0)
    {
        console.log(`given number ${num} is even`)
    }
    else{       
        console.log(`given number ${num} is odd`)
    }
}

even_or_odd(num)

