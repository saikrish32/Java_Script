console.log('Hey I am a internal script');

var a = {name:'prasad', age:'24',city:'mexico'}
var b = {name:'krish', age:'24',city:'mexico'}
var c = {name:'sai', age:'24',city:'mexico'}

console.time('Time taken');
console.log('Hey');
//console.error('an error occured');
//console.warn('Hey this is an warning')

//console.log({a,b,c});

console.table({a,b,c});

console.log('%c Custom message','color:blue;');

console.timeEnd('Time taken')