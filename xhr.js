var xhr = {
  request: function(type, url, opts) {
    'use strict';

    var json = 'application/json';
    var req = new XMLHttpRequest(),
        payload = ('payload' in opts) ? opts.payload : null,
        callback = (opts.callback || function() {}).bind(req),
        headers = opts.headers || (opts.raw ? {} : {
          'Content-Type': json,
          'Accept': json
        });

    req.open(type, url);
    for (var k in headers)
      req.setRequestHeader(k, headers[k]);

    req.onerror = function() { callback(true); };
    req.onload = function() {
      callback(
        null,
        opts.raw
          ? req.responseText
          : JSON.parse(req.responseText)
      );
    };

    if (!opts.raw)
      payload = JSON.stringify(opts);
    req.send(payload);
    return req;
  }
};

xhr.post = xhr.request.bind(xhr, 'POST');
xhr.get =  xhr.request.bind(xhr, 'GET');
