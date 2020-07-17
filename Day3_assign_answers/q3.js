let num = +prompt("Enter your marks");
if(num>90){
    grade = 1;
}
else if (num>85)
{
    grade = 2;
}
else if (num>75)
{
    grade = 3;
}
else if (num>70)
{
    grade = 4;
}
else if (num>35)
{
    grade = 3;
}
else{
    grade = 999
}
switch(grade){
    case 1:
        console.log('A+');
        break;
    case 2:
        console.log('A');
        break;
    case 3:
        console.log('B+');
        break;
    case 4:
        console.log('B');
        break;
    case 5:
        console.log('C');
        break;
    default:
        console.log('Fail');
        break;
        
}
