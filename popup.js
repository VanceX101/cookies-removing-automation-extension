document.getElementById('toggleAuto').addEventListener('click', () => {
  chrome.storage.local.get('autoMode', (data) => {
    const newAutoMode = !data.autoMode;
    chrome.storage.local.set({ autoMode: newAutoMode });
    updateButtonLabel();
  });
});

document.getElementById('settings').addEventListener('click', () => {
  window.open(chrome.runtime.getURL('settings.html'));
});

document.getElementById('history').addEventListener('click', () => {
  window.open(chrome.runtime.getURL('history.html'));
});

function updateButtonLabel() {
  chrome.storage.local.get('autoMode', (data) => {
    document.getElementById('toggleAuto').innerText = data.autoMode ? 'Disable Auto' : 'Enable Auto';
  });
}

// Initial update
updateButtonLabel();
