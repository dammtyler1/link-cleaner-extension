// Link Cleaner - Popup Script

let currentUrl = '';
let cleanedUrl = '';

// DOM elements
const originalUrlEl = document.getElementById('originalUrl');
const cleanedUrlEl = document.getElementById('cleanedUrl');
const cleanBtn = document.getElementById('cleanBtn');
const copyBtn = document.getElementById('copyBtn');
const successMsg = document.getElementById('successMsg');
const upgradeLink = document.getElementById('upgradeLink');

// Get current tab URL on load
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs[0]) {
    currentUrl = tabs[0].url;
    originalUrlEl.textContent = currentUrl;
    originalUrlEl.classList.remove('empty');
    
    // Auto-clean on open for better UX
    cleanUrl();
  }
});

// Clean URL button
cleanBtn.addEventListener('click', cleanUrl);

function cleanUrl() {
  if (!currentUrl) return;
  
  cleanBtn.disabled = true;
  cleanBtn.textContent = 'Cleaning...';
  
  chrome.runtime.sendMessage(
    { action: 'cleanUrl', url: currentUrl },
    (response) => {
      cleanedUrl = response.cleanedUrl;
      cleanedUrlEl.textContent = cleanedUrl;
      cleanedUrlEl.classList.remove('empty');
      cleanedUrlEl.classList.add('cleaned');
      
      copyBtn.disabled = false;
      cleanBtn.disabled = false;
      cleanBtn.textContent = 'Clean URL';
      
      // Show if URL was actually cleaned
      if (currentUrl !== cleanedUrl) {
        const paramCount = countRemovedParams(currentUrl, cleanedUrl);
        cleanBtn.textContent = `✓ Removed ${paramCount} tracker${paramCount !== 1 ? 's' : ''}`;
      } else {
        cleanBtn.textContent = '✓ Already clean!';
      }
    }
  );
}

// Copy to clipboard
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cleanedUrl).then(() => {
    // Show success message
    successMsg.style.display = 'block';
    copyBtn.textContent = '✓ Copied!';
    
    setTimeout(() => {
      successMsg.style.display = 'none';
      copyBtn.textContent = 'Copy Cleaned URL';
    }, 2000);
  });
});

// Upgrade link (will open pricing page once we have it)
upgradeLink.addEventListener('click', (e) => {
  e.preventDefault();
  // TODO: Open Gumroad pricing page
  alert('Pro version coming soon! Features:\n• Auto-clean on page load\n• Custom parameter rules\n• Bulk URL cleaning\n\nPrice: $5 one-time');
});

// Helper function to count removed parameters
function countRemovedParams(original, cleaned) {
  try {
    const originalParams = new URL(original).searchParams;
    const cleanedParams = new URL(cleaned).searchParams;
    
    let count = 0;
    originalParams.forEach((value, key) => {
      if (!cleanedParams.has(key)) count++;
    });
    
    return count;
  } catch (e) {
    return 0;
  }
}
