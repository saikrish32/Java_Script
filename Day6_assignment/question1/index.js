 
//  const colors = ['black','blue','green','red','yellow']

// colors.forEach(element => {
//  setTimeout(()=>{ 
//     document.body.style.backgroundColor = element;
//     document.body.style.color = 'white';
//     document.body.style.fontFamily = 'Helvetica';
//  },5000)
// });



const colors = ['black','blue','green','red','yellow']
colors.forEach(function(element,index)
 {
setTimeout(function() 
{
    document.body.style.backgroundColor = element;
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
        }, 5000*(index+1)) // or just index, depends on your needs
}         )