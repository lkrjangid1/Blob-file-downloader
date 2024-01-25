document.addEventListener('DOMContentLoaded', function() {
  var downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', function() {
    var fileUrl = document.getElementById('fileUrl').value;
    if (!fileUrl) {
      alert('Please enter a file URL');
      return;
    }
    chrome.downloads.download({ url: fileUrl });
    window.close();
    console.log('Downloading file: ' + fileUrl);
  });
});
