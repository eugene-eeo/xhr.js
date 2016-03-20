xhr = function(type, url, opts) {
  var req = new XMLHttpRequest();
  var raw = opts.raw;
  var payload  = ('payload' in opts) ? opts.payload : null;
  var callback = (opts.callback || function() {}).bind(req);
  var headers = raw ? {} : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };

  var update = opts.headers;
  if (update)
    for (var k in update)
      headers[k] = update[k];

  req.open(type, url);
  for (var k in headers)
    req.setRequestHeader(k, headers[k]);

  req.onerror = function() { callback(true); };
  req.onload = function() {
    var res = req.responseText;
    var err = null;
    if (!raw)
      try {
        res = JSON.parse(res);
      } catch(e) {
        err = e;
      }
    callback(err, res);
  };

  req.send(raw ? payload : JSON.stringify(payload));
  return req;
};

xhr.post = xhr.bind(null, 'POST');
xhr.get  = xhr.bind(null, 'GET');
