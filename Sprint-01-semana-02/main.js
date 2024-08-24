function redirecionar() {
    setTimeout(function() {
        window.location.href = 'index-2.html';
    }, 4000);
}

window.onload = redirecionar();