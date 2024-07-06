/*function test() {
    document.getElementById("demo").innerHTML = 'IM ACTUALLY GAY 🏳️‍🌈'}*/



function test() {

    const parg = document.getElementById('demo')

    if (parg.innerHTML === 'IM NOT GAY') {
        parg.innerHTML = 'IM ACTUALLY GAY 🏳️‍🌈';
    }else {
        parg.innerHTML = 'IM NOT GAY';
    }
}

