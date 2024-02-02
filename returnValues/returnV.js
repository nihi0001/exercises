function momsBeregner(amount, moms = 25){
    return amount + (amount*moms) / 100;
    //const totalWMoms = amount * (1+moms/100); 
    //console.log(totalWMoms)

}

let beregnetMoms = momsBeregner(100);
console.log("beregnetMoms", beregnetMoms)