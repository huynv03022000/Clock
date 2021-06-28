class ClassName {
    constructor(hours, minutes, second) {
        this.hours = hours;
        this.minutes = minutes;
        this.second = second;
    }
    setHours(hours) {

        if (hours >= 0 && hours <= 9) {
            this.hours = "0" + hours
            return
        }
        this.hours = hours
    }
    setMiunites(minutes) {
        if (minutes >= 0 && minutes <= 9) {
            this.minutes = "0" + minutes;
            return
        }
        this.minutes = minutes;
    }
    setSeconds(second) {
        if (second >= 0 && second <= 9) {

            this.second = "0" + second;
            return
        }
        this.second = second;
    }
    getMinutes() {
        if (this.minutes >= 0 && this.minutes <= 9) {
            return "0" + this.minutes

        }
        return this.minutes;
    }
    getHours() {
        if (this.hours >= 0 && this.hours <= 9) {
            return "0" + this.hours

        }
        return this.hours;
    }
    getSeconds() {
        if (this.second >= 0 && this.second <= 9) {
            return "0" + this.second

        }
        return this.second;
    }

    run() {
        this.render()
    }
    render() {
        var result = this.hours + ":" + this.minutes + ":" + this.second;
        let clock = document.getElementById("clock");
        clock.innerText = result;
    }
    stop() {

    }


}
let inter;


function start() {
    inter = setInterval(function() {
        debugger
        let date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        let newClock = new ClassName(h, m, s);
        newClock.setHours(h);
        newClock.setMiunites(m);
        newClock.setSeconds(s);
        newClock.run();
    }, 1000);
}

function stop() {
    clearInterval(inter);
}

function stopBamgio() {
    clearInterval(bam);
}
let bam;
var ho = 0;
var mi = 0;
var se = 0
var check = true;
var vong = 1;

function bamgio() {
    if (check) {
        bam = setInterval(function() {
            debugger
            // ho += 1;
            // mi += 1;

            se += 1;
            if (se >= 60) {
                se = 0;
                mi += 1;
                if (mi < 10) {
                    mi = "1" + mi;
                }

            }
            if (mi >= 60) {
                mi = 0;
                ho += 1;
            }
            let newClock = new ClassName(ho, mi, se);

            newClock.setHours(ho);
            newClock.setMiunites(mi);
            newClock.setSeconds(se);
            newClock.run();
            document.getElementsByClassName("bam")[0].innerHTML = "Dừng";
            check = false;

        }, 1000);
    } else {
        let newClock = new ClassName(ho, mi, se);
        debugger

        document.getElementsByClassName("bam")[0].innerHTML = "Bấm Giờ";
        clearInterval(bam);
        check = true;
        var content = document.getElementById("result").innerHTML;
        document.getElementById("result").innerHTML = "  <h1>Vòng " + vong + ": " + newClock.getHours() + ":" + newClock.getMinutes() + ":" + newClock.getSeconds() + " </h1>" + content;
        vong++;
    }
}

function baothuc() {
    document.getElementsByClassName("baothuc")[0].style.display = "block";
}
let Al;
var sound = new Audio("../audio/house.mp3");
sound.loop = true;

function setAlarm() {
    var time = document.getElementById("appt").value;
    document.getElementById("clock").innerHTML = "Đặt báo thức : " + time;
    Al = setInterval(function() {
        stop();
        stopBamgio();
        var time = document.getElementById("appt").value;
        //document.getElementById("clock").innerHTML = "Đặt báo thức : " + time;
        let timeSplip = time.split(":");
        var hou = timeSplip[0];
        var min = timeSplip[1];
        let date = new Date();
        let hoursCurrent = date.getHours();
        let minutesCurrent = date.getMinutes();
        if (hou == hoursCurrent && min == minutesCurrent) {
            document.getElementById("off").style.display = "block";
            sound.play();
        }
    }, 1000);

}

function OffAlarm() {
    var time = document.getElementById("appt").value = "";
    document.getElementById("off").style.display = "none";
    sound.pause();
}