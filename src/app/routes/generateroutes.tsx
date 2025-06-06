import flattenDeep from 'lodash/flattenDeep';
import { type FC } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import ProtectedRoute from './protected';
import type { RouteConfig, LayoutRoute, RoutesProps } from '@/types/index';


// Helper: flatten deeply nested route config into RouteConfig[]
const generateFlattenRoutes = (routes?: RouteConfig[]): RouteConfig[] => {
    if (!routes) return [];
    return flattenDeep(
        routes.map(({ routes: subRoutes, ...rest }) => [rest, generateFlattenRoutes(subRoutes)])
    ) as RouteConfig[];
};

// Main renderer
export const renderRoutes = (mainRoutes: LayoutRoute[]) => {
    const Routes: FC<RoutesProps> = ({ isAuthorized }) => {
        const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
            const subRoutes = generateFlattenRoutes(routes);
            return (
                <Route key={index} element={<Layout />}>
                    {subRoutes.map(({ component: Component, path, name, isPublic }) => (
                        Component && path ? (
                            <Route
                                key={name}
                                element={
                                    <ProtectedRoute isPublic={isPublic} isAuthorized={isAuthorized} />
                                }
                            >
                                <Route path={path} element={<Component />} />
                            </Route>
                        ) : null
                    ))}
                </Route>
            );
        });

        return <ReactRoutes>{layouts}</ReactRoutes>;
    };

    return Routes;
};
