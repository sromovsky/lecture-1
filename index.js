function main() {
    //uloha1();
    //uloha4();
    //uloha7();
    //uloha8();
    //uloha8_1();
    task8_1();
}

function uloha1() {

    const a = Number.parseFloat(inputA());
    const b = Number.parseFloat(inputB());

    const bmi = a / (b*b)

    var vyrovnanie;

    if (bmi > 25) {
        vyrovnanie = Math.abs(25 - bmi);
    } else if (bmi < 19) {
        vyrovnanie = Math.abs(19 + bmi);
    } else {
        vyrovnanie = 0;
    }
    if (bmi <= 19) {
        log("podváha - Treba pribrať " + vyrovnanie.toFixed(2) + "kg");
    } else if (bmi <= 30) {
        log("nadváha - Treba schudnúť " + vyrovnanie.toFixed(2) + "kg");
    } else {
        log("normálna hmotnosť ");
    }

}

function uloha4() {
    const a = Number.parseInt(inputA());
    const b = Number.parseInt(inputB());

    const result = Math.pow(a, b)

    log(result);

}

function uloha7 () {
    const fix = 1.5
    const perKm = 0.75
    const waitPrice = 10
    let totalPrice;

    const a = Number.parseInt(inputA());
    const b = Number.parseInt(inputB());
    const c = inputC().toString().toLowerCase();

    if ( c === "a" ) {
        totalPrice = 20
    } else if (c === "n") {
        totalPrice = 0
    } else {
        log("Znečistenie -> a/n")
    }

    if( a <= 5 ) {
        totalPrice += fix
    } else {
        totalPrice += fix + (a * perKm)
    }

    if( b > 0) {
        totalPrice += b * (waitPrice/60)
    } else {
        totalPrice += 0
    }

    log(totalPrice.toFixed(2));

}

function uloha8() {
    const a = inputA().toString().toUpperCase();
    const b = inputB().toString().toUpperCase();
    const toCypher = a.split("");
    const fromCypher = b.split("")


    function cypher(value, index) {
        switch (toCypher[index]) {
            case "B":
                toCypher[index]="1";
                break;
            case "A":
                toCypher[index]="2";
                break;
            case "L":
                toCypher[index]="3";
                break;
            case "T":
                toCypher[index]="4";
                break;
            case "I":
                toCypher[index]="5";
                break;
            case "M":
                toCypher[index]="6";
                break;
            case "O":
                toCypher[index]="7";
                break;
            case "R":
                toCypher[index]="8";
                break;
            case "E":
                toCypher[index]="9";
                break;
            case "S":
                toCypher[index]="10";
                break;
            case "K":
                toCypher[index]="11";
                break;
            case "Y":
                toCypher[index]="12";
                break;
        }

    }

    function decypher(value, index) {
        switch (toCypher[index]) {
            case "1":
                toCypher[index]="B";
                break;
            case "2":
                toCypher[index]="A";
                break;
            case "3":
                toCypher[index]="L";
                break;
            case "4":
                toCypher[index]="T";
                break;
            case "5":
                toCypher[index]="I";
                break;
            case "6":
                toCypher[index]="M";
                break;
            case "7":
                toCypher[index]="O";
                break;
            case "8":
                toCypher[index]="R";
                break;
            case "9":
                toCypher[index]="E";
                break;
            case "10":
                toCypher[index]="S";
                break;
            case "11":
                toCypher[index]="K";
                break;
            case "12":
                toCypher[index]="Y";
                break;
        }

    }

    toCypher.forEach(cypher);
    fromCypher.forEach(decypher);

    log(fromCypher.join(""));
    log(toCypher.join(""));
}

function uloha8_1() {
    const a = inputA().toString().toUpperCase();
    const b = inputB().toString().toUpperCase();
    const toCypher = a.split("");
    const cypherKeyInput = b.split(" ");

    function createCypherKey(cypherKeyInput) {
        let cypherDict = {};
        cypherKeyInput.forEach(function (item) {
            const dictItem = item.split('=');
            cypherDict[dictItem[0].toUpperCase()]=dictItem[1];
        });
        return cypherDict;
    }

    var cypherDict = createCypherKey(cypherKeyInput);

    function cypher(value, index) {
        if(toCypher[index].toString() in cypherDict) {
            toCypher[index]=cypherDict[toCypher[index]]
        }
    }

    toCypher.forEach(cypher);

    log(toCypher.join(""));
}

function task8_1() {
    let value = `${inputA().toUpperCase()}`;
    const cypher = `${inputB().toUpperCase()}`;

    [...cypher].forEach((key, index) => {
        value = value.replace(key, `${index + 1}`);
    });

    log(value);
}
