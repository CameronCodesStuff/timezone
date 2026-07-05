function updateClocks() {
  const now = new Date();

  const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };

  const nzTime = now.toLocaleTimeString('en-US', { ...timeOptions, timeZone: 'Pacific/Auckland' });
  const scotlandTime = now.toLocaleTimeString('en-US', { ...timeOptions, timeZone: 'Europe/London' });

  const nzDate = now.toLocaleDateString('en-GB', { ...dateOptions, timeZone: 'Pacific/Auckland' });
  const scotlandDate = now.toLocaleDateString('en-GB', { ...dateOptions, timeZone: 'Europe/London' });

  document.getElementById('nz-time').textContent = nzTime;
  document.getElementById('scotland-time').textContent = scotlandTime;
  document.getElementById('nz-date').textContent = nzDate;
  document.getElementById('scotland-date').textContent = scotlandDate;
}

updateClocks();
setInterval(updateClocks, 1000);
