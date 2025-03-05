import { UpIcon } from '../Icons';
import ModeToggleSwitch from './ModeToggleSwitch';

export default function FloatTool({}) {
  return (
    <div className="fixed bottom-10px left-10px w-100px h-50px rounded-6px bg-gray-500 bg-opacity-20 backdrop-blur-sm z-[2] flex justify-center items-center gap-2">
      <button
        className="w-28px h-28px border-2px border-black bg-white hover:bg-gray-200"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <UpIcon size={24} fill={'black'} />
      </button>
      <ModeToggleSwitch />
    </div>
  );
}
