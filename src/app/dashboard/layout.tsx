import DashboardNavbar from '@/components/dashboard-navbar';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <DashboardNavbar /> */}
      <main className="flex-1 flex">{children}</main>
    </div>
  );
};

export default DashboardLayout;
