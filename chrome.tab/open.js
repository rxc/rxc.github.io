(function(){

var port = chrome.runtime.connect({name: "open_in_tab"});

window.addEventListener("message", function(evt) {
    if (evt.source != window) return;
    if (evt.data.type && evt.data.type == 'OPEN_TAB') {
        port.postMessage(evt.data.url);
    }
});

})()
