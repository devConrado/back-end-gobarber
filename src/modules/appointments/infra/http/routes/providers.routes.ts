import { Router } from 'express';
import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availabity',
  providerMonthAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availabity',
  providerDayAvailabilityController.index,
);

export default providersRouter;
