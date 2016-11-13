// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var sites;
$.getJSON(chrome.extension.getURL('src/data/sites.json'), function(response) {
  sites = response;
});
//example of using a message handler from the inject scripts
chrome.webNavigation.onCompleted.addListener(function(details) {
	domain = URI(details.url).domain();

  if(sites[domain] != undefined) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      console.log(tabs);
      chrome.tabs.sendMessage(tabs[0].id, {"message": "show_warning", "site": sites[domain]}, function(response) {});
    });
  }
});
