m = 0;
var z;
function Sta()
 {
    z = setInterval(run, 40);
    function run() {

        if (m == 1310) {
            clearInterval(z);
            m=0;

        }
        else {
            m += 5;
            let x = document.getElementById('carimg');
            x.style.marginLeft = m + 'px';
        }
    }
}
function stop() {
    clearInterval(z);
}