require('Common');
var win = new Window();
application.exitAfterWindowsClose = true;
win.visible = true;
win.title = "Hi Tint World!";


var webview = new WebView(); // Create a new webview for HTML.
win.appendChild(webview); // attach the webview to the window.

// position the webview 0 pixels from all the window's edges.
webview.left=webview.right=webview.top=webview.bottom=0;

// What we should do when the web-page loads.
webview.addEventListener('load', function() {
    webview.postMessage(JSON.stringify(process.versions));
});

webview.location = "app://src/index.html"; // Tell the webview to render the index.html