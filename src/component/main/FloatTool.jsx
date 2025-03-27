import { UpIcon } from '../Icons';
import ModeToggleSwitch from './ModeToggleSwitch';

export default function FloatTool({}) {
  return (
    <div className="fixed bottom-10px left-10px w-100px h-50px rounded-6px bg-gray-300 bg-opacity-80 backdrop-blur-sm z-[2] flex justify-center items-center gap-2">
      <button
        className="w-28px h-28px rounded-4px bg-white hover:bg-gray-300 flex items-center justify-center"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div>
          <UpIcon size={20} fill={'black'} />
        </div>
      </button>
      <ModeToggleSwitch />
    </div>
  );
}
