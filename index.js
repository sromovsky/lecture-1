function main(){
    uloha8()
}
function uloha4(){

    const a = parseInt(inputA());
    const b = parseInt(inputB());

    let c = a ** b


    console.log(c)
}

function uloha1(){
    const kg = parseInt(inputA());
    const cm = parseInt(inputB());
    let bmi = kg / ((cm/100)**2);
    let d;
    let e = ((cm/100)**2)*19-kg;
    let g = ((cm/100)**2)*25-kg;

    if (bmi <= 19){
        d = "Máte podváhu, do normálnej váhy musíte pribrať " + e + " kg";
    }
    else if (19 < bmi <= 25){
        d = "Máte normálnu váhu";
    }
    else if (25 < bmi <= 30){
        d = "Máte nadváhu, do normálnej váhy musíte schudnúť" + g + " kg";
    }
    else{
        d = "Máte obezitu, do normálnej váhy musíte schudnúť" + g + " kg";
    }

    console.log(d)
}

function uloha7(){

    const pocetkm = parseInt(inputA());
    const cakanie = parseInt(inputB());
    const znecitenie = structuredClone(inputC());
    let a, b, c;

    if (pocetkm<=5){
        a = 1.5;
    }
    else {
        a = (pocetkm - 5) * 0.75 + 1.5;
    }

    b = cakanie * 0.1666666666666667;

    if (znecitenie === "a"){
        c = 20;
    }
    else  {
        c = 0;
    }



    const vysledok = a + b + c;
    const cena = vysledok.toFixed(2);
    console.log(cena,"€","(",a, "+", b, "+", c,")");
}

function uloha8(){

    const veta = inputA();
    const A = veta.replaceAll(["B"], "1").replaceAll("A", "2").replaceAll("L", "3").replaceAll("T", "4").replaceAll("I", "5").replaceAll("M", "6").replaceAll("O", "7").replaceAll("R", "8").replaceAll("E", "9").replaceAll("S", "10").replaceAll("K", "11").replaceAll("Y", "12");



    console.log(A)
}