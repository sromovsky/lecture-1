function main() {
   //Uloha1();
    // Uloha2()
}

function Uloha1(){
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let BMI = a/(b*b);
    log(BMI);
    if (BMI <=19) {
        log("Osoba má podváhu")
    }else if(BMI > 19 || BMI <= 25) {
        log("Osoba má normálnu hmotnosť")
    }else if (BMI > 25 || BMI <= 30){
        log("Osoba má nadváhu")
    }

}

function Uloha2(){
    const a = inputA();
    const b = inputB();
    const c = inputC();
}