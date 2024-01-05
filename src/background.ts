let active = false;
const appScriptWebAppURL = "https://script.google.com/a/macros/ucsd.edu/s/AKfycbxbHpqR6VYyj7pIQ6G4JH9aD8JDPFtekE-GrZe48fJnS60_rDMTc_kiyjLOD4shrsCj/exec";

console.log(`background`)

function makeOrange(color: string): void {
    document.body.style.backgroundColor = color;
}

chrome.action.onClicked.addListener((tab) => {
  console.log(2)
    active = !active;
    const color = active ? 'orange' : 'white';
    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: makeOrange,
        args: [color]
    }).then();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(1)
  if (changeInfo.status === 'complete' && tab.url?.includes('https://docs.google.com/')) {
    chrome.tabs.sendMessage(tabId, { action: "getData" });
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'getData') {
      // Send a request to the Google Apps Script web app
      fetch(appScriptWebAppURL)
        .then(res => console.log(res))
        .catch(error => console.error(error));
    }
  }
);
