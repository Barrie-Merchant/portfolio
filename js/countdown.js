const newYears = new Date("Jan 1 2022 0:0:0").getTime()
 

let countdown = setInterval(function() {
    const newYearsDate = new Date(newYears)
    const now = new Date();
    let timeleft = (newYearsDate - now);
    

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft / (1000*60*60)) % 24 );
    let minutes = Math.floor((timeleft/1000/60) % 60 );
    let seconds = Math.floor((timeleft/1000) % 60 );

    document.getElementById('days').innerHTML= days;
    document.getElementById('hours').innerHTML= hours; 
    document.getElementById('mins').innerHTML= minutes;  
    document.getElementById('seconds').innerHTML= seconds;   

}, 1000);


