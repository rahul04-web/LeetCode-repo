 //write a js function that take date as inp 
 //check it falls in saturday and sunday

 function isWeekend(date){
    const check = new Date(date)
    const getDay = check.getDay()
    if(getDay === 0 || getDay === 6){
        return 'This date belong in weekend'
    }else{
        return "This date is not belong in weekend"
    }
 }
 const result = isWeekend('07-05-2020')
 console.log(result);
 