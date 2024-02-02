// Lav en funktion der modtager to argumenter beloeb og moms. 
// Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.

"use strict"

momsBeregner(100,20) // her overskriver jeg moms pr. default så i dette tilfælde er det 20%
momsBeregner(200)
momsBeregner(300)


function momsBeregner(amount, moms = 25){
    // amount er beløbet vi ønsker en udregning fra. Og vi sætter momsen til 25%. 
    // vi angiver pr. default når vi sætter ligmed 25%, så vil udregningen altid være med ugangspunkt i 25%.
    const totalWMoms = amount * (1+moms/100); 
    // her laver vi en variabel med udregningen
    console.log(totalWMoms)
    // her ønsker vi at få vist variablen i consollen. 

}
