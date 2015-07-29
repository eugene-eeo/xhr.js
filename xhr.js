var xhr = {
  request: function(type, url, opts) {
    'use strict';
    var req = new XMLHttpRequest(),
        payload = ('payload' in opts) ? opts.payload : null,
        headers = opts.headers || (opts.raw ? {} : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        callback = (opts.callback || function() {}).bind(req);

    req.open(type, url);
    for (var k in headers)
      req.setRequestHeader(k, headers[k]);

    req.onerror = function() { callback(true) };
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
  },
};

xhr.post = xhr.request.bind(xhr, 'POST');
xhr.get =  xhr.request.bind(xhr, 'GET');
