function main() {
    //uloha4();
    //uloha7();
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