const toggle = document.getElementById("toggle");
const ownerMood = document.getElementById("ownerMood");

function updateOwnerMood(isEnabled) {
  if (isEnabled) {
    ownerMood.src = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Angry%20face/3D/angry_face_3d.png";
  } else {
    ownerMood.src = "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Hugging%20face/3D/hugging_face_3d.png";
  }
}

chrome.storage.sync.get(["enabled"], (result) => {
  toggle.checked = result.enabled ?? true;
  updateOwnerMood(toggle.checked);
});

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
  updateOwnerMood(toggle.checked);
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
  });
});
