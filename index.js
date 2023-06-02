document.querySelector('.btn').onclick = function () {



    const col1 = document.getElementById('divOne').style.backgroundColor;

    if (col1 === 'indigo') {
        document.getElementById('divOne').style.backgroundColor = 'white'
        document.querySelector('.btn').innerText = 'Click'
    }
    else {
        document.getElementById('divOne').style.backgroundColor = "indigo";
        document.querySelector('.btn').innerText = 'Purple'

    }
}




