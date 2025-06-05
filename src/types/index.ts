import { type ComponentType } from 'react';

export  interface RouteConfig {
  name: string;
  title: string;
  path?: string;
  component?: ComponentType<any>;
  isPublic?: boolean;
  hasSiderLink?: boolean;
  routes?: RouteConfig[];
}

export interface LayoutRoute {
  layout: ComponentType<any>;
  routes: RouteConfig[];
}

export interface RoutesProps {
  isAuthorized: boolean;
}
