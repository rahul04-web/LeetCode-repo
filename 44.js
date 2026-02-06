//find the day from the given date value

//input : "2024-12-05"

function findDay(date){
    const day=["sunday","Monday","Tuesday","Wensday","Thurseday","Friday","Saturday"]
    const tarikh = new Date(date)
    const getday=tarikh.getDay()
    return day[getday]
}

console.log(findDay("2004-10-10"))
