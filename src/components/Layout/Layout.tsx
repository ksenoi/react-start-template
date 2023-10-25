import React, {FC} from 'react';
import {Header } from 'src/components/Header/Header'

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
);