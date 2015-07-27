var xhr = (function() {
  'use strict';

  var jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  var request = function(type, url, opts) {
    var req = new XMLHttpRequest();

    var payload = (opts.payload === undefined) ? null : opts.payload;
    var headers = opts.headers || (opts.raw ? {} : jsonHeaders);
    var callback = (opts.callback || function() {}).bind(req);

    req.open(type, url);

    for (var k in headers) {
      req.setRequestHeader(k, headers[k]);
    }

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
      payload = JSON.stringify(payload);

    req.send(payload);
    return req;
  };

  return {
    request: request,
    post: request.bind(this, 'POST'),
    get: request.bind(this, 'GET')
  };
})();
