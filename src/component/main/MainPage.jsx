import { Outlet, useLocation } from 'react-router-dom';
import FloatTool from './FloatTool';
import TableHeader from './table/TableHeader';
import SearchBar from './SearchBar';
import SortSelect from './SortSelect';

export default function MainPage({}) {
  const location = useLocation();

  return (
    <div>
      <div className="sticky top-0 w-full flex flex-col items-center bg-white z-[2]">
        <div className="flex justify-center items-center gap-3 w-full h-48px bg-blue-200 mb-8px">
          <SearchBar />
          <SortSelect />
        </div>
        {location.pathname === '/main/table' ? <TableHeader /> : null}
      </div>
      <FloatTool />
      <div className="w-full flex flex-col items-center mb-120px md:mb-1">
        <Outlet />
      </div>
    </div>
  );
}
