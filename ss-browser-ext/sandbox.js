// sandbox.js

// Firebase config
const config = {
  projectId: "",
  apiKey: "",
  storageBucket: "",
};

let db;
window.addEventListener("message", (event) => {
  if (event.data.action === "init") {
    const app = firebase.initializeApp(config);
    db = firebase.firestore(app);
    console.log("Firebase initialized!");
  } else if (event.data.action === "checkURL") {
    checkURL(event.data.url).then((result) => {
      event.source.postMessage(
        { result: { ...result, url: event.data.url } },
        event.origin
      );
    });
  }
});

async function checkURL(url) {
  const domain = new URL(url).hostname.replace("www.", "");
  const querySnapshot = await db
    .collection("urls")
    .where("url", "array-contains", domain)
    .get();

  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data();
  } else {
    return null;
  }
}
