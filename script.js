function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? '"PM"' : '"AM"';

    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    document.getElementById('hour').textContent = String(hours % 12 || 12).padStart(2, '0');
    document.getElementById('minute').textContent = String(minutes).padStart(2, '0');
    document.getElementById('second').textContent = String(seconds).padStart(2, '0');
    document.getElementById('period').textContent = period;
    document.getElementById('day').textContent = String(day).padStart(2, '0');
    document.getElementById('month').textContent = '"' + month + '"';
    document.getElementById('year').textContent = year;
}


updateClock();
setInterval(updateClock, 1000);
