import Router from 'koa-router';
import preRenderRouter from './prerender';

const router = new Router();

router.use('', preRenderRouter.routes(), preRenderRouter.allowedMethods());

export default router;
