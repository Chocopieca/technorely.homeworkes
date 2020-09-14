function test(f){
    return function() {
    f.apply(this, arguments);
    };
};

let testF = test(console.log);

testF(1000);