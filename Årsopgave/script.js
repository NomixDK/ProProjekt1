	let symbol = "x";
	let placeholder = "";

function update () {
console.log("exec")
/*placeholder = event.target.value;
console.log(placeholder)
  if(placeholder === "a") {
  	console.log("works") */
    event.target.value  = symbol;
    if(symbol === "x")
      symbol = "o";
    else
      symbol = "x";

  }

function reload() {
  location.reload();
}




















 