function changes() {
    let blur = parseInt(document.getElementById('blur-range').value);
    document.getElementById('blur-representation').innerHTML = `${blur}`;
    document.getElementById('square').style['backdrop-filter'] = `blur(${blur}px)`;
    let transparency = parseInt(document.getElementById('transparency-range').value);
    document.getElementById('transparency-representation').innerHTML = `${transparency/100}`;
    document.getElementById('square').style.background = `rgba(255, 255 ,255, ${transparency/100})`;
}

function frontTextManipulator() {
    document.getElementById('front').classList.toggle('text-representation');
}

function rearTextManipulator () {
    document.getElementById('rear').classList.toggle('text-representation');
}

function backgroundManipulator () {
    document.getElementById('backgroundImg').classList.toggle('inner-wrap-switch');
}