

import Sidebar from '@/app/components/sidebar';

const AdminPanelPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-5">
        {/* Your main content for the admin panel */}
      </main>
    </div>
  );
};

export default AdminPanelPage;
