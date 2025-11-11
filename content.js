
function removeSidebars() {
    const leftAside = document.querySelector('aside.fixed.left-0.top-0');
    if (leftAside) leftAside.remove();
  
    const rightAside = document.querySelector('aside.fixed.right-0.top-0');
    if (rightAside) rightAside.remove();

    const topBanners = document.querySelectorAll('div.fixed.top-0.backdrop-blur-sm, div.fixed.top-0.border-b');
    topBanners.forEach(banner => {
      if (banner.querySelector('.animate-scroll')) {
        banner.remove();
      }
    });

    const bottomBanners = document.querySelectorAll('div.fixed.bottom-0.backdrop-blur-sm, div.fixed.bottom-0.border-t');
    bottomBanners.forEach(banner => {
      if (banner.querySelector('.animate-scroll')) {
        banner.remove();
      }
    });
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
  