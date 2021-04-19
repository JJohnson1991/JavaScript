const clock = document.querySelector('.clock');
//let lastTime = new Date(0);

const tick = () => {
    const now = new Date();
    //lastTime = now - lastTime;
    //console.log(lastTime);
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
   
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;
    clock.innerHTML = html;
};

setInterval(tick, 1000);