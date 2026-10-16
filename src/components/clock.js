export function setupClock() {
  const timeEl = document.getElementById('localtime');
  if (!timeEl) return;

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  function update() {
    const now = new Date();
    timeEl.textContent = `Ventura, CA — ${formatter.format(now)}`;
  }

  update();
  // Update on the interval
  setInterval(update, 1000);
}
