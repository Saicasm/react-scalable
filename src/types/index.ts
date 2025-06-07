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

export type Character = {
  id: string;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
};

export type GetCharactersResponse = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number | null;
      prev: number | null;
    };
    results: Character[];
  };
};