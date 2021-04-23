import { NavBar } from './NavBar';

export const Page = ({ children }) => (
  <div className="w-screen h-screen flex flex-col bg-primary">
    <NavBar />
    {children}
  </div>
);
