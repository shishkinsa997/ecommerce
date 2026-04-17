import SideBar from '@components/ui/SideBar';

const MainLayout = () => {
  return (
    <main className="mx-auto w-full">
      <div className="max-w-360 mx-auto gap-6 p-8 flex items-start">
        <SideBar />
      </div>
    </main>
  );
}

export default MainLayout;