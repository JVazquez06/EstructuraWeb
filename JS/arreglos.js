let numeros=[1,2,3,4,5,10,20,30,40,50];
let par=[];
let impar=[];

for (let i=0;i<numeros.length;i++){
    console.log(`Posición ${i}:${numeros[i]}`)
    if(numeros%2 === 0){
        par.push(numeros[i]);
    }
    impar.push(numeros[i]);
}