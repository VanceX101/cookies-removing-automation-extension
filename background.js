// Hàm dọn dẹp cookies và lưu lịch sử
function clearCookies() {
  console.log('Clearing cookies...');

  chrome.cookies.getAll({}, (cookies) => {
    cookies.forEach(cookie => {
      if (cookie.name.startsWith("cookies_of")) {
        chrome.cookies.remove({ url: "https://" + cookie.domain + cookie.path, name: cookie.name }, (details) => {
          if (chrome.runtime.lastError) {
            console.error('Error removing cookie:', chrome.runtime.lastError);
          } else {
            console.log(`Removed cookie: ${cookie.name}`);
            // Lưu lịch sử
            const now = new Date().toISOString();
            chrome.storage.local.get('history', (data) => {
              const history = data.history || [];
              history.push({ cookieName: cookie.name, timestamp: now });
              chrome.storage.local.set({ history });
            });
          }
        });
      }
    });
  });
}
