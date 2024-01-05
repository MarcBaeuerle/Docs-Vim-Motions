export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
      target: {tabId: tab.id!},
      func: () => {
        alert('Hello from my extension');
      }
    })

  }
  element.addEventListener('click', () => {
    setCounter(counter + 1);
    onclick();
  })
  setCounter(0)
}
