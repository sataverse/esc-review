import { useLocation, useNavigate } from 'react-router-dom';
import { ImageIcon, TableIcon } from '../Icons';

export default function ModeToggleSwitch({}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="w-48px h-28px p-2px border-2px border-black rounded-full bg-white cursor-pointer"
      onClick={() => {
        if (location.pathname === '/main/table') {
          navigate('/main/grid');
        } else if (location.pathname === '/main/grid') {
          navigate('/main/table');
        }
      }}
    >
      <div
        className="animation flex justify-center items-center size-20px rounded-full bg-black"
        style={{ transform: location.pathname === '/main/table' ? 'translateX(0)' : 'translate(20px)' }}
      >
        <div style={{ display: location.pathname === '/main/table' ? 'block' : 'none' }}>
          <TableIcon size={14} fill={'white'} />
        </div>
        <div style={{ display: location.pathname === '/main/grid' ? 'block' : 'none' }}>
          <ImageIcon size={14} fill={'white'} />
        </div>
      </div>
    </div>
  );
}
