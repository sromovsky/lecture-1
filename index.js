function main() {
    //task4();
	task6();
}

function task4() {
    const a = Number.parseInt(inputA());
    const b = Number.parseInt(inputB());
    //const c = inputC();
let c = Math.pow(a,b)
	log(c);

}
function task6() {
    const a = Number.parseInt(inputA());

let c=1;

var x=1;

if (a>0) {
	

do 
{
	x*=c;
	//log(x);
	c++;
	//log(c);
}
while(c <= a);
log(x);

	}
else
{
	log ("Zadaj celé číslo > 0");

}
}
