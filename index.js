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

const buttons = document.getElementsByClassName('btnTwo');

const div3 = document.getElementById('divTwo');


for (let a of buttons) {
    a.addEventListener('click', function () {

        const btnStyle = getComputedStyle(this);

        const btnbackgroundColor = btnStyle['backgroundColor']

        div3.style.backgroundColor = btnbackgroundColor;

    });
}

document.querySelector('h1').style.color = 'white'

document.querySelector('.btnThree').addEventListener('click', () => {

    const colors = ['green', 'yellow', 'red', 'blue', 'black', 'pink', 'purple', 'brown', 'orange'];

    const num = Math.floor(Math.random() * colors.length);

    document.querySelector('.div3').style.backgroundColor = colors[num];
    document.querySelector('h1').innerText = colors[num]


}
)



