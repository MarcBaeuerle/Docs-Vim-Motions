/**
 * When chrome extension icon is clicked, append a button to
 * the DOM that when clicked sends an alert
 */
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    func: () => {
      const myButton: HTMLButtonElement = document.createElement('button');
      myButton.textContent = "test";
      myButton.onclick = () => {
        alert("Yo")
      }
      document.body.append(myButton)
    },
    target: {
      tabId: tab.id || 0
    }
  })
    .then(() => {
      console.log('button inserted')
    })
    .catch((err) => {
      console.error('Button not inserted: ', err)
    })
})
export {};
