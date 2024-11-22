function createCazuelita() {
    const cazuelita = document.createElement('div');
    cazuelita.classList.add('cazuelita');
    cazuelita.style.left = Math.random() * 100 + 'vw';
    cazuelita.style.animationDuration = Math.random() * 16 + 19 + 's';
    document.body.appendChild(cazuelita);
    setTimeout(() => {
        cazuelita.remove();
    }, 10000);
}
setInterval(createCazuelita, 500);