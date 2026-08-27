const studentRecords = [
        
        {name:"Bhaarath" , marks:97},
        {name:"Janani" , marks:84},
        {name:"kalai" , marks:75},
        {name:"prabhu" , marks:63}
];

for(i = 0; i < studentRecords.length; i++){
    if(studentRecords[i].marks>80){
        console.log(studentRecords[i].name);
        
    }
}