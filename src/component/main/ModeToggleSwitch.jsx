import { useMode } from '../../module/store';
import { ImageIcon, TableIcon } from '../Icons';

export default function ModeToggleSwitch({}) {
  const { mode, setMode } = useMode();

  return (
    <div
      className="w-48px h-28px p-2px border-black rounded-14px bg-white cursor-pointer"
      onClick={() => {
        if (mode === 'table') {
          setMode('grid');
        } else {
          setMode('table');
        }
      }}
    >
      <div
        className="animation flex justify-center items-center size-24px rounded-12px bg-black"
        style={{ transform: mode === 'table' ? 'translateX(0)' : 'translate(20px)' }}
      >
        <div style={{ display: mode === 'table' ? 'block' : 'none' }}>
          <TableIcon size={14} fill={'white'} />
        </div>
        <div style={{ display: mode === 'grid' ? 'block' : 'none' }}>
          <ImageIcon size={14} fill={'white'} />
        </div>
      </div>
    </div>
  );
}
