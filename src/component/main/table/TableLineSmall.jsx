import { useModal } from '../../../module/store';
import { getScoreColor, getLevelColor, getHorrorColor } from '../../../module/util';

export default function TableLineSmall({ info }) {
  const { setThemeId } = useModal();

  return (
    <div
      className="w-340px text-14px border-black border-r-1px border-b-1px border-l-1px"
      style={{ cursor: isNaN(info.id) ? 'default' : 'pointer' }}
      onClick={() => info.id !== '' && setThemeId(info.id)}
    >
      <div className="h-28px p-6px mb-2px flex items-start">
        <div>{`${info.id === '' ? '' : `[${info.id}]`} ${info.theme}`}</div>
      </div>
      <div className="h-22px p-6px flex items-end justify-between">
        <div className="text-12px text-gray-500">
          {info.brand === '' ? info.place : `${info.place} • ${info.brand} ${info.store}`}
        </div>
        <div className="flex items-center gap-4px">
          <div
            className="w-26px h-16px rounded-4px text-12px text-center leading-16px bg-gray-200 font-semibold"
            style={{ color: getScoreColor(info.score)[1] }}
          >
            {isNaN(info.score) ? info.score : info.score.toFixed(1)}
          </div>
          <div
            className="w-26px h-16px rounded-4px text-12px text-center leading-16px bg-gray-200 font-semibold"
            style={{ color: info.level > 5 ? 'white' : 'black', backgroundColor: getLevelColor(info.level) }}
          >
            {info.level}
          </div>
          <div
            className="w-26px h-16px rounded-4px text-12px text-center leading-16px bg-gray-200 font-semibold"
            style={{ color: info.horror > 5 ? 'white' : 'black', backgroundColor: getHorrorColor(info.horror) }}
          >
            {info.horror === 0 ? '-' : info.horror}
          </div>
        </div>
      </div>
    </div>
  );
}
