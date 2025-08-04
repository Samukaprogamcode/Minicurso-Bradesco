'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Light"
    }
    else {
        this.textContent = "Dark";
    }
    console.log('current class name: ' + className);



});


function showResponsivityMessage(type) {
    let msg = document.getElementById('responsivity-msg');
    if (!msg) {
        msg = document.createElement('div');
        msg.id = 'responsivity-msg';
        msg.style.position = 'fixed';
        msg.style.top = '10px';
        msg.style.left = '50%';
        msg.style.transform = 'translateX(-50%)';
        msg.style.background = '#2bff00ff';
        msg.style.color = '#000';
        msg.style.padding = '10px 20px';
        msg.style.borderRadius = '10px';
        msg.style.zIndex = '9999';
        document.body.appendChild(msg);
    }
    msg.textContent = `Alterou a responsividade para: ${type}`;
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
}

function checkResponsivity() {
    const width = window.innerWidth;
    if (width < 600) {
        showResponsivityMessage('Mobile');
    } else if (width < 900) {
        showResponsivityMessage('Tablet');
    } else {
        showResponsivityMessage('Desktop');
    }
}

window.addEventListener('resize', checkResponsivity);
window.addEventListener('DOMContentLoaded', checkResponsivity);