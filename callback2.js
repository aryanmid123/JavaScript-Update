var isEven = (element) =>
{
return element %2 ===0;
}
var result =[2,4,6,8].every(() => {});
console.log(result);

//But 

var result =[2,4,6,8].every((e) => {
return e%2 ===0;
});
console.log(result);
