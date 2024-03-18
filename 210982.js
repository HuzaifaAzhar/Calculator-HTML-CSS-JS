v = "";
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function permutations(n,r) {
    if (n < r) {
        return 0;
    }
    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= (n - i);
    }
    return result;
}
function calculatePermutations() {
    let [n, r] = v.split("P");
    v = permutations(n,r);
    document.getElementById("disp_screen").placeholder = v;
}
function dispFactorial(){
    v=factorial(parseInt(v));
    document.getElementById("disp_screen").placeholder = v;
}
function displayNumber(number) {
    v+=number;
  document.getElementById("disp_screen").placeholder = v;
}
function clearDisplay() {
    v="";
  document.getElementById("disp_screen").placeholder = v;
}
function calculate() {
    if(v.includes("P")){
        calculatePermutations();
    }
    else{
    v=eval(v);
    document.getElementById("disp_screen").placeholder = v;
    }
}