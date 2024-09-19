import type { ReactElement, ReactNode } from 'react';

export type RouteModel = {
  type: 'LINK'|'COLLAPSE';
  name: string;
  key: string;
  icon: ReactElement; // Updated from React.ReactHTMLElement to ReactElement
  route: string;
  items?: RouteItems[],
  isCollapsible?: boolean,
  component: ReactNode; // Represents any valid React child (elements, fragments, etc.)
};


export type RouteItems = {
  name: string, 
  key: string,
  icon?: ReactElement,
  component: ReactNode,
  route: string
}
