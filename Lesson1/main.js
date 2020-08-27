//variables
const array = [];
for(let i=0; i<=2; i++){
array.push(prompt(`Введите ${i+1} целое число`))
};
console.log(array)
let result = {x1: "", x2: ""};
let err = "";

//controller
function quad_equation(array) {
  let [a,b,c] = array
  if (a == 0) return err = "Корней нет"
  if (b == 0) return first_case(a,c)
  if (c == 0) return second_case(a,b)
  third_case(a,b,c);
};
quad_equation(array);

//model
function first_case(a,c) {
  let res = Math.sqrt(-(c/a));
  if (isNaN(res)) {
    return err = "Корней нет";
  }
  result.x1 = res.toFixed(3)
  return
};

function second_case(a,b) {
  let x2 = -(b/a);
  result.x1 += 0;
  result.x2 += x2.toFixed(3);
  return
};

function third_case(a,b,c) {
  let D = b*b-4*a*c;
      D_root = Math.sqrt(D)
  if (isNaN(D_root)) {
    return err = "Корней нет";
  }
      D_root = D_root.toFixed(3);
  result.x1 += (-b + D_root)/2*a
  result.x2 += (-b - D_root)/2*a
};

// view
function answer() {
if (result.x1 && result.x2){
  return console.log(`x1 = ${result.x1}, x2 = ${result.x2}`);
}
if (err) {
  return console.log(err);
} 
if(result.x1) {
  return console.log(` x1 = ${result.x1}`)
}};

answer();

//test