//addUp//
function addArrayValues() {
    let arrayInput = document.getElementById("arrayInput").value;
    let array = arrayInput.split(',').map(function(item) {
      return parseInt(item.trim());
    });
let arr = [5,4,3,2,1]
let addition = 0
for (let i = 0; i < arr.length; i++) {
    addition += arr[i];
}
}

console.log(addition)