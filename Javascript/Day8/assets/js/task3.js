const getfactorial = (num) => {
    result = 1;
        for(let i = num; i>0; i--){
            result = result*i;
        }
        return result;
    }
    const factorial = getfactorial(7);
    console.log("This is a factorial:" + factorial);
