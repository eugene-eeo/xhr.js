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

## Options

| Name      | Type     | Description                             |
| --------- |:--------:|:--------------------------------------- |
| headers   | Object   | Mapping of `String` to `String` headers that will be added to the XHR object. |
| callback  | Function | Callback to be invoked with an error and the (raw/decoded) response. The context is bound to the XHR object. |
| raw       | Boolean  | Whether JSON parsing or encoding is to be done. If this is set to false (default) and no headers are passed, the `Content-Type` and `Accept` headers are set to `application/json`. |
| payload   | String *or* Object | Data to be sent to the server. |
