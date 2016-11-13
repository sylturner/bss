chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.message === "show_warning") {
    console.log("message recieved");
    console.log(request.site);

    var text = "<h1 id='bss-h1'>Warning! This site is known for <strong>BULLSHIT</strong></h1>";
    text += "<p>It has been flagged for the following categories:</p>";
    text += "<ul>";
    request.site.categories.forEach(function(category) {
      text += "<li>";
      text += category;
      text += "</li>";
    });
    text += "</ul>";
    text += "<a class=\"closebtn\" onclick=\"$('#bss-overlay').hide()\">&times;</a>";

    var overlay = jQuery('<div id="bss-overlay"><div class="content">' + text + '</div></div>');
    overlay.appendTo(document.body);
  }
});
