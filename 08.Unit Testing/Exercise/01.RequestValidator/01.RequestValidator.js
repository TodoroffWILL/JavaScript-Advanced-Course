function validator(request) {
  const { method, uri, version, message } = request;
  const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const uriPattern = /^([\w.])+$|^\*$/;
  const messagePattern = /^[^<>\\&\'\"]+$/;
  const errorMessage = (typeOfParam) => {
    throw new Error(`Invalid request header: Invalid Method ${typeOfParam}`);
  };

  if (!validMethod.includes(method) || !method) errorMessage('Method');

  if (!validVersions.includes(version) || !version) errorMessage('Version');

  if (!uriPattern.exec(uri) || !uri) errorMessage('URI');

  if (!messagePattern.exec(message) || !!message) errorMessage('Message');

  return request;
}

validator({
  method: 'GET',

  uri: 'svn.public.catalog',

  version: 'HTTP/1.1',

  message: '',
});
