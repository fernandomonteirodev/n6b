$(function () {
    // Your custom JavaScript goes here
    var div = document.getElementById('browser');
    var p = pileup.create(div, {
        range: range,
        tracks: sources
    });
});
