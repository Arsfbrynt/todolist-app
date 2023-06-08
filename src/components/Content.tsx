import React, { PropsWithChildren } from 'react';

interface ContentProps extends PropsWithChildren<{}> {}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Content;
