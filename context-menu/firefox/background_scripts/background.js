// -- not all browsers have the same context menu api object.
// -- so, detect which one the browser supports ...

let contextMenuAPI;
if (typeof browser !== "undefined" && browser.contextMenus) {
  // -- Firefox
  contextMenuAPI = browser;
  // console.info('using browser object');
}
else if (typeof chrome !== "undefined" && chrome.contextMenus) {
  // -- Chrome or Opera
  contextMenuAPI = chrome;
  // console.info('using chrome object');
}
else {
  console.log('Context menu is not supported in this browser');
}

if (contextMenuAPI) {
  const MENU_ID = 'turkey-opinion';
  // -- populate the context menu panel
  contextMenuAPI.contextMenus.create({
    id: MENU_ID,
    title: "Gobble gobble"
  });

  // -- listen and run content script
  contextMenuAPI.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === MENU_ID) {
      contextMenuAPI.tabs.executeScript({
        file: "/content_scripts/ask-turkey.js"
      });
    }
  });
}
