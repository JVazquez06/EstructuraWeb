let numeros=[1,2,3,4,5,10,20,30,40,50];
let par=[];
let impar=[];

for (let i=0;i<numeros.length;i++){
    console.log(`Posición ${i}:${numeros[i]}`)
    if(numeros[i] % 2 === 0){
        par.push(numeros[i]);
    } else if(numeros[i] % 2 !== 0){
        impar.push(numeros[i]);
    }
}
console.log(par);
document.writeln(par);
console.log(impar);
document.write(impar);