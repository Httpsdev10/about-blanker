function openInBlank() {
    let url = document.getElementById("urlInput").value;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url; // Ensure valid URL format
    }
    
    const newWindow = window.open("about:blank", "_blank");
    if (!newWindow) {
        alert("Popup blocked! Allow popups for this site.");
        return;
    }

    newWindow.document.open();
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang='en'>
        <head><title>about:blank</title></head>
        <body style='margin:0;'>
            <iframe src='${url}' style='width:100vw; height:100vh; border:none;'></iframe>
        </body>
        </html>
    `);
    newWindow.document.close();
}
