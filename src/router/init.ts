import { $location, historyUpdated, history } from './model';

$location.on(historyUpdated, (_, payload) => payload);

history.listen((location, action) => {
  historyUpdated({ location, action });
});
