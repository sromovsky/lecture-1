function main() {
    //Uloha1();
    //Uloha3();
    //Uloha4();
    //Uloha5();
    //Uloha6();
    //Uloha7();
}

function Uloha1(){
    const a = inputA();
    const b = inputB();
    let wgh = (a*1);
    let BMI = a/(b*b);
    if (isNaN(a) || isNaN(b)) {
        log("Nesprávny tvar, zadajte číslo");
    }
    else if((a <= 10) || (a > 635) || (b < 0.54) || (b > 250)){
        log("Zadajte reálne hodnoty");
    }else if (BMI <=19){
        do{
           wgh = wgh + 0.1;
        }while(wgh/(b*b)<=19)
        let diff = wgh - a;
        log(Math.round((BMI + Number.EPSILON) * 100) / 100);
        log("Osoba má podváhu a musí pribrať " + Math.round((diff + Number.EPSILON) * 100) / 100 + "kg");
    }else if(BMI > 19 && BMI <= 25) {
        log(Math.round((BMI + Number.EPSILON) * 100) / 100);
        log("Osoba má normálnu hmotnosť");
    }else if (BMI > 25 && BMI <= 30){
        do{
            wgh = wgh - 0.1;
        }while(wgh/(b*b)>25)
        let diff = a - wgh;
        log(Math.round((BMI + Number.EPSILON) * 100) / 100);
        log("Osoba má nadváhu a musí schudnúť " + Math.round((diff + Number.EPSILON) * 100) / 100 + "kg");
    }else {
        do{
            wgh = wgh - 0.1;
        }while(wgh/(b*b)>25)
        let diff = a - wgh;
        log(Math.round((BMI + Number.EPSILON) * 100) / 100);
        log("Osoba má obezitu a musí schudnúť " + Math.round((diff + Number.EPSILON) * 100) / 100 + "kg");
    }

}

function Uloha3() {
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let a_spoj = a.toLowerCase().split(" ").join("")
    let i = (a_spoj.length - 1)
    let opak = [];
    for(let j = 0; i>=0 ;i--){
        opak[j] = a_spoj[i];
        j++;
   }
    let opak_final = opak.join("");
    if(a_spoj == opak_final)
        log("Je to palindrom");
    else
        log("Nie je to palindrom");
}

function Uloha4() {
    const a = inputA();
    const b = inputB();
    const c = inputC();

    let vysledok = 1;
    let i = b;
    if (isNaN(a) || isNaN(i)) {
        log("Nesprávny tvar, zadajte číslo");
    }else do{
        vysledok*=a;
        i--;
    }while(i>0)
    log(vysledok);
}

function Uloha5() {
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let x = 0;
    let y = 1;
    let i = a;
    let j = 0;
    let temp;
    let vysledok = [];
    if (isNaN(a)) {
        log("Nesprávny tvar, zadajte číslo");
    }else do{
        temp = y
        y = x + y;
        vysledok[j] = x;
        x = temp;
        i--;
        j++;
    }while(i > 0)
    log(vysledok);
}

function Uloha6() {
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let i = a;
    let vysledok = 1;
    if (isNaN(a)) {
        log("Nesprávny tvar, zadajte číslo");
    }else {
        for(;i>0;i--){
            vysledok*=i;
        }
        log(vysledok);
    }
}

function Uloha7() {
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let cena_zak = 1.50;
    let cena_mimo;
    let cena_km;
    let cak_min = (10 / 60);
    let cena = 0;
    let znecistenie;
    if (isNaN(a) || isNaN(b)) {
        log("Nesprávny tvar, zadajte číslo");
    } else {
        if (a > 5) {
            cena_mimo = (a - 5);
            cena_mimo = (cena_mimo * 0.75);
            cena_km = cena_zak + cena_mimo;
        }
        if (c == "a") {
            znecistenie = 20;
            cena = cena_km + (cak_min * b) + znecistenie;
            log((Math.round((cena + Number.EPSILON) * 100) / 100) + "( " + cena_zak + " + " + cena_mimo + "*0.75 " + "+" + b + "*10/60 " + "+ " + znecistenie + ")");
        } else if (c == "n"){
            znecistenie = 0;
            cena = cena_km + (cak_min * b) + znecistenie;
            log((Math.round((cena + Number.EPSILON) * 100) / 100) + "( " + cena_zak + " + " + cena_mimo + "*0.75 " + "+" + b + "*10/60 " + "+ " + znecistenie + ")");
        }else log("Zadajte v C možnosť a/n")
    }
}
