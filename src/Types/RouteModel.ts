import type { ReactElement, ReactNode } from 'react';

export type RouteModel = {
  type: 'collapse';
  name: string;
  key: string;
  icon: ReactElement; // Updated from React.ReactHTMLElement to ReactElement
  route: string;
  component: ReactNode; // Represents any valid React child (elements, fragments, etc.)
};
