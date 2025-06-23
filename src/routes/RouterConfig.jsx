import { Routes, Route } from 'react-router-dom';
import PATH from './path';
import NoPageFound from '../pages/NoPageFound';
import { Suspense } from 'react';
import Loader from '../common/Loader';
import ROUTES from '.';

function RouterConfig() {
  return (
    <Routes>
      {ROUTES.map((item) => {
        // const RouteType = item.routeType;
        const { routeType: RouteType, component: Component } = item;
        return (
          <Route
            key={item.path}
            path={item.path}
            element={
              <RouteType
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            }
          />
        );
      })}
      {/* NO PAGE FOUND */}
      <Route path={PATH.NOPAGE} element={<NoPageFound />} />
    </Routes>
  );
}

export default RouterConfig;
