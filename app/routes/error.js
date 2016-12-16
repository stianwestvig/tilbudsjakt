module.exports = function handleError(err, request, response, next) {
  response.status(500).send('<h1>Something broke!</h1><p>' + err + '</p>');
  next();
}