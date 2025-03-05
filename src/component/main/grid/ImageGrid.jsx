import { useModal } from '../../../module/store';
import LazyImage from './LazyImage';

export default function ImageGrid({ data }) {
  const { setThemeId } = useModal();

  return (
    <div className="w-full md:w-[62.5rem] grid grid-cols-4 md:grid-cols-6 gap-2px pl-1 pr-1">
      {data.map((item) => (
        <div key={item.id} className="square bg-gray-300 cursor-pointer" onClick={() => setThemeId(item.id)}>
          <div className="w-full h-full overflow-hidden">
            <LazyImage
              className={'animation w-full h-full object-cover object-center hover:scale-105'}
              src={item.image.substr(1)}
              alt={item.theme}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
