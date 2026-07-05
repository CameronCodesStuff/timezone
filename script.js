function updateClocks() {
  const now = new Date();

  const options = { timeZone: 'Pacific/Auckland', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
  const nzTime = now.toLocaleTimeString('en-US', options);
  const scotlandTime = now.toLocaleTimeString('en-US', { ...options, timeZone: 'Europe/London' });

  document.getElementById('nz-time').textContent = nzTime;
  document.getElementById('scotland-time').textContent = scotlandTime;
}

updateClocks();
setInterval(updateClocks, 1000);
