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

By default, **xhr.js** assumes that you are interfacing with
JSON endpoints using JSON data. If you want to use other forms
of data exchange you can turn it off by using:

    xhr.get('/status', { raw: true });

API is extremely simple. For now, consult the [source].

[source]: https://github.com/eugene-eeo/xhr.js/blob/master/xhr.js
