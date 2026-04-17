import SideBar from '@components/ui/SideBar';
import GridCard from '@components/ui/GridCard';

const MainLayout = () => {
  return (
    <main className="mx-auto w-full">
      <div className="max-w-360 mx-auto gap-6 p-8 flex items-start">
        <SideBar />
        <GridCard />
      </div>
    </main>
  );
}

export default MainLayout;