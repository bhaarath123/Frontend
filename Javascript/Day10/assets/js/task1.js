function processnumber(num,callback){
    let result = num * 2;
    callback(result);
}

function displayoutput(outputdata){
    console.log("The process of result is:" + outputdata);
    }

    processnumber(5,displayoutput)