let foo;

function one() {
  const a = 1;
  function two() {
    const b = 2;
    function three() {
      const c = 3;
      function four() {
        let arr = new Array;
        arr.push(a,b,c);
        // console.log(arr);
        return arr;
      }
      foo = four;
    }
    three();
  }
  two();
}
one();
console.log(foo()[2]);