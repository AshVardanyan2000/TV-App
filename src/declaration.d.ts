declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  export const ReactComponent: FC<SVGProps<SVGSVGElement> & { title?: string }>;

  const src: string;
  export default src;
}
