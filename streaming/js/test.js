infobox = document.getElementById('test');

function blitSize() {
    infobox.innerHTML = 'width: ' + window.innerWidth + ' height: ' + window.innerHeight;
}

interval = setInterval(blitSize, 10);