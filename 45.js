//geting current date and time in readable format

//expected op 12/03/2024, Time : 2:30:00PM

function getCurrentDateAndTime(){
    const today = new Date()
    // const localDate = today.toLocaleDateString()
    const time = today.toLocaleString()
    console.log( time)
}
getCurrentDateAndTime()