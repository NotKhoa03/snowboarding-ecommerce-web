// Initiate the asyncHandler function to catch any errors that are thrown and pass them to our error handler middleware.
//This is a middleware function that wraps an async function in a try/catch block so we can catch any errors that are thrown and pass them to our

const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;