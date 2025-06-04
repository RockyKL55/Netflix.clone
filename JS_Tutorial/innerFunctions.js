function outerFunction(){
    console.log("i am outer function");
    
    function innerFunction(name){
        console.log(`hello ${name}`);
        
    }
    return innerFunction
}
let out = outerFunction()

out('pollard')