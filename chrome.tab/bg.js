(function(){

chrome.runtime.onConnect.addListener(function(port) {
    if (port.name != 'open_in_tab') return;
    port.onMessage.addListener(function(msg) {
        chrome.tabs.create({url: msg, active: false});
    });
});

})()
