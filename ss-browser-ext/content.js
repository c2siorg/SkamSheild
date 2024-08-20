const iframe = document.createElement("iframe");
iframe.src = chrome.runtime.getURL("sandbox.html");
iframe.style.display = "none";
document.body.appendChild(iframe);

function initializeFirebase() {
  iframe.contentWindow.postMessage({ action: "init" }, "*");
}

function checkLinks() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    try {
      const url = new URL(link.href).hostname;
      console.log(url);
      iframe.contentWindow.postMessage({ action: "checkURL", url: url }, "*");
    } catch (error) {
      // Ignore invalid URLs
      console.warn(`Invalid URL: ${link.href}`);
    }
  });
}

function handleResponse(event) {
  if (event.data.result) {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      const url = new URL(link.href).hostname;
      if (url === "www.urlvoid.com") {
        link.style.border = "2px solid red";
        link.title = "This site is flagged as potentially dangerous!";
      }
    });
  }
}

window.addEventListener("message", handleResponse);

window.addEventListener("load", () => {
  initializeFirebase();
  checkLinks();
  setInterval(checkLinks, 5000); // Re-check links every 5 seconds
});
