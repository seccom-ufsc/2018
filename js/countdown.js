var end_time = new Date("October 16, 2018").getTime();

let timer_id = setInterval(function timer() {
    var current_time = Date.now();
    var wait_time = end_time - current_time;

    document.getElementById("counter_seconds").innerHTML = Math.floor((wait_time/1000)%60);
    document.getElementById("counter_minutes").innerHTML = Math.floor(((wait_time/1000)/60)%60);
    document.getElementById("counter_hours").innerHTML = Math.floor((((wait_time/1000)/60)/60)%24);
    document.getElementById("counter_days").innerHTML = Math.floor(((((wait_time/1000)/60)/60)/24));

    if (wait_time === 0) {
        clearInterval(timer_id);
    }
}, 1000);
