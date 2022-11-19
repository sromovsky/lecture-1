function main() {
    //Uloha1();
    //Uloha2();
    Uloha3();
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

function Uloha2() {
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let i = 0;
    let j = 0;
    let zoradene;
    let string = a.toLowerCase().split(" ").join("")

    const dlzka_s_medz = a.length
    const dlzka = string.length;
    log("Upravene " + string);
    if (dlzka_s_medz > 255) {
        log("Maximálne 255 znakov, aktuálna dĺžka " + dlzka_s_medz)
    }
    for(i;i<dlzka;i++) {
        for(j;j<dlzka;j++){
            if(string[i]>string[j]){
                let tempStr = string[i];
                string[i] = string[j];
                string[j] = tempStr;
            }
        }
    }
}

function Uloha3() {
    const a = inputA();
    const b = inputB();
    const c = inputC();
    let splitString = a.toLowerCase().split(" ")
    let reverseArray = splitString.reverse();
    log(reverseArray);
       // if(reverseArray === a.join('').reverse()){
          //  log("Palindrom")
       // }
       // else log("Nie je palindrom")
}