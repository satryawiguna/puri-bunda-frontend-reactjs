import { Router } from 'express';
import authRoute from './authRoute';
import movieRoute from './movieRoute';

const router = Router();

const defaultRoutes = [
     {
          path: '/auth',
          route: authRoute,
     },
     {
          path: '/movie',
          route: movieRoute,
     },
];

defaultRoutes.forEach((route) => {
     router.use(route.path, route.route);
});

export default router;
