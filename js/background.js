chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://tech.meituan.com/404.html";
    chrome.tabs.create({ url: newURL });
});
