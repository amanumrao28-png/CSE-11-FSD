function sum(...num){
    const sum=num.reduce((s,i)=>(s+i));
    return sum;

}
const add=(...num)=>{
    let sum=0;
    for(let i of num){
        sum+=i;
    }
    return sum;
}
export {sum, add};