import DefaultLayout from './DefaultLayout';
import { LayoutProps } from './types';

interface CustomLayoutProps extends LayoutProps {
  isAdmin?: boolean;
}

const Layout = ({ children }: CustomLayoutProps) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default Layout;
