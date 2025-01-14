document.getElementById('saveSettings').addEventListener('click', () => {
    const domain = document.getElementById('domain').value;
    const interval = parseInt(document.getElementById('interval').value);
    const regex = document.getElementById('regex').value;
  
    chrome.storage.local.set({ domain, interval, regex }, () => {
      alert('Settings saved!');
    });
  });
  
  // Load settings on page load
  chrome.storage.local.get(['domain', 'interval', 'regex'], (data) => {
    document.getElementById('domain').value = data.domain || '';
    document.getElementById('interval').value = data.interval || 60;
    document.getElementById('regex').value = data.regex || '';
  });
  