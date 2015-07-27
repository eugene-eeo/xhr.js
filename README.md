# xhr.js

**xhr.js** is a super simple, super lightweight wrapper around
the `XMLHttpRequest` object with an emphasis on cross-browser
compatibility and overall size.

    var req = xhr.get('/status', {
        headers: {},
        callback: function(err, res) {
            console.log(res);
        },
    });

By default the `xhr` methods assumes that you are interfacing
with JSON endpoints with JSON data. To override that you can
do the following:

    xhr.get('/status', {
        raw: true,
    });

Which will prevent JSON parsing and encoding.
