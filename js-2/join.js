function join(arr){
    let string="";

    for(let i=0;i<arr.length;i++){

        string=string+arr[i]+" ";


    }

    return string;

}




console.log(join([1, 3, 2])) //
console.log(join(["hola","pedro"])) 
console.log(join(["s","b","c"])) //
console.log(join([])) //