document.getElementById('filter').addEventListener('change', (event) => {
    const selectedDate = event.target.value;
    loadHistory(selectedDate);
  });
  
  function loadHistory(filterDate) {
    chrome.storage.local.get('history', (data) => {
      const history = data.history || [];
      const filteredHistory = filterDate ? history.filter(entry => new Date(entry.timestamp).toISOString().split('T')[0] === filterDate) : history;
  
      const tableBody = document.getElementById('historyTable');
      tableBody.innerHTML = '';
      filteredHistory.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${entry.cookieName}</td>
          <td>${entry.timestamp}</td>
        `;
        tableBody.appendChild(row);
      });
    });
  }
  
  // Load history on page load
  loadHistory();
  