// Utils
const ERRORS = require('./lib/errors');

function databaseStatus(req, res, next) {
  if (typeof req.app.settings.database === 'undefined' || !req.app.settings.database) return next(ERRORS.INTERNAL);

  return next();
}

function notFound(req, res, next) {
  next(ERRORS.NOT_FOUND);
}

function errorHandler(error, req, res, next) {
  console.log(error);

  return res.status(error.code).json({
    status: error.code,
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '📚' : error.stack,
    errors: error?.errors ? error?.errors : null,
  });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function sanitizeQueryParams(req, res, next) {
  const limit = isNaN(parseInt(normalize(req.query['limit']))) ? 20 : parseInt(normalize(req.query['limit']));
  const sort = isNaN(req.query['sort']?.toString().trim().toLowerCase()) ? 'created_at,-1' : req.query['sort']?.toString().trim().toLowerCase();
  const skip = isNaN(parseInt(normalize(req.query['skip']))) ? 0 : parseInt(normalize(req.query['skip']));

  // convert to obj to comply with mongoose aggregate
  const objectified_sort = { [sort.split(',')[0]]: parseInt(sort.split(',')[1]) };

  req.query = { limit, sort: objectified_sort, skip };
  return next();
}

module.exports = {
  databaseStatus,
  notFound,
  errorHandler,
  sanitizeQueryParams,
};
