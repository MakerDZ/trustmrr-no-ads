
function removeSidebars() {
    const leftAside = document.querySelector('aside.fixed.left-0.top-0');
    if (leftAside) leftAside.remove();
  
    const rightAside = document.querySelector('aside.fixed.right-0.top-0');
    if (rightAside) rightAside.remove();
  }
  
  function observeChanges() {
    const observer = new MutationObserver(removeSidebars);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  chrome.storage.sync.get(["enabled"], (result) => {
    if (result.enabled !== false) {
      removeSidebars();
      observeChanges();
    }
  });
  