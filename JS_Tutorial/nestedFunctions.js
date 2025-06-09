function outerFunction(age){
    console.log("i am outer function",`${age}`);
    
    function innerFunction(name){
        console.log(`hello ${name}`);
        
    }
    return innerFunction
}

outerFunction(55)('pollard')
