const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes.add('featured/index', '/featured-board');
routes.add('article/index', '/article-board');

export default routes;
