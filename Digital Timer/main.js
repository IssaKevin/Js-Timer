let btn = document.querySelector('#btn');

let now = new Date().getTime();

let here = new Date().toLocaleDateString();

const timeinput = document.querySelector('#timeinput');

btn.addEventListener('click', Onsubmit);

function Onsubmit(e) {

    timeValue = timeinput.value;

    console.log(timeValue);

    e.preventDefault();

    var endDate = new Date(`${here} ${timeValue}`).getTime();
   
    var time = setInterval(function() {

        let now = new Date().getTime();

        let t = endDate - now;
        
        if (t >= 0) {
        
            let days = Math.floor(t / (1000 * 60 * 60 * 24));

            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

            let secs = Math.floor((t % (1000 * 60)) / 1000);

            document.getElementById('min').innerHTML = ("0"+mins).slice(-2);

            document.getElementById('secs').innerHTML = ("0"+secs).slice(-2);

            document.querySelector('.count-cont').style.display = 'block';
        
        } else {

            //document.getElementById('min').innerHTML = '00';

            //document.getElementById('secs').innerHTML = '00';

            //document.querySelector('#count').style.animation = 'none';

        
        }
        
    }, 1000);
}

