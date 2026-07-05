function updateClocks() {
  const now = new Date();

  const nzTime = now.toLocaleTimeString('en-GB', { timeZone: 'Pacific/Auckland' });
  const scotlandTime = now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });

  document.getElementById('nz-time').textContent = nzTime;
  document.getElementById('scotland-time').textContent = scotlandTime;
}

updateClocks();
setInterval(updateClocks, 1000);
