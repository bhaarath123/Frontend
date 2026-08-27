// 1. Global Scope: Accessible anywhere in the file
const globalVar = "I am Global";

function testScope() {
    // 2. Function Scope: Accessible only inside this function
    const functionVar = "I am Function Scoped";
    
    if (true) {
        // 3. Block Scope: let and const are strictly limited to this if-statement block
        let blockLet = "I am Block Scoped (let)";
        const blockConst = "I am Block Scoped (const)";
        
        // var ignores curly braces blocks and bleeds into the function scope!
        var blockVar = "I am using var inside a block"; 
        
        console.log(blockLet);   // Works
        console.log(blockConst); // Works
    }
    
    console.log(globalVar);   // Works (Global)
    console.log(functionVar); // Works (Function local)
    console.log(blockVar);    // Works because var is not block scoped!
    
    //console.log(blockLet);   // ERROR! blockLet is not defined here
    //console.log(blockConst); // ERROR! blockConst is not defined here
}

testScope();
