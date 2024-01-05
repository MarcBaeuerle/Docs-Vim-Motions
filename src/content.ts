const iframe = document.querySelector<HTMLIFrameElement>(".docs-texteventtarget-iframe");

if (iframe) {
  const input = iframe.contentDocument?.activeElement as HTMLElement;
  console.log(input);

  // Ensure the iframe has focus
  iframe.focus();

  // Create a new KeyboardEvent
  const eventObj = new KeyboardEvent("keypress", {
    keyCode: 105,
    bubbles: true,
    cancelable: true,
  });

  // Dispatch the event
  if (input) input.dispatchEvent(eventObj);
}

// print content of the Google Docs document
function printGoogleDocsContent() {
  console.log(1)
  const iframe = document.querySelector<HTMLIFrameElement>(".docs-texteventtarget-iframe");

  if (iframe) {
    console.log(2)
    iframe.onload = () => {
      console.log(3)
      const iframeDocument = iframe.contentDocument;
      if (iframeDocument) {
        const iframeContent = iframeDocument.body.textContent;
        console.log("Content of the Google Docs document:", iframeContent);
      }
    };
  }
}

printGoogleDocsContent();
