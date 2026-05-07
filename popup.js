const cb = document.getElementById('toggle');
const preview = document.getElementById('preview');

chrome.storage.local.get(['enabled'], (r) => {
  cb.checked = r.enabled !== false;
});

cb.addEventListener('change', () => {
  chrome.storage.local.set({ enabled: cb.checked });
});

function tick() {
  preview.textContent = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo', dateStyle: 'medium', timeStyle: 'medium'
  }).format(new Date()) + ' JST';
}
tick();
setInterval(tick, 1000);