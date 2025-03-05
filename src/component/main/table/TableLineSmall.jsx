import { useModal } from '../../../module/store';
import { getScoreColor, getLevelColor, getHorrorColor } from '../../../module/util';

export default function TableLineSmall({ info }) {
  const { setThemeId } = useModal();

  return (
    <>
      <div className="flex">
        <div className="w-50px p-6px border-black border-r-1px border-b-1px border-l-1px text-center text-14px">
          {info.id}
        </div>
        <div
          className="w-290px p-6px border-black border-r-1px border-b-1px text-14px"
          style={{ cursor: isNaN(info.id) ? 'default' : 'pointer' }}
          onClick={() => !isNaN(info.id) && setThemeId(info.id)}
        >
          {info.theme}
        </div>
      </div>
      <div className="p-6px border-black border-r-1px border-b-1px border-l-1px flex justify-between items-center w-340px">
        <div className="text-14px">{`[${info.place}] ${info.brand} ${info.store}`}</div>
        <div className="flex items-center gap-4px">
          <div
            className="w-30px h-18px rounded-4px text-12px text-center bg-gray-200 font-semibold"
            style={{ color: getScoreColor(info.score)[1] }}
          >
            {isNaN(info.score) ? info.score : info.score.toFixed(1)}
          </div>
          <div
            className="w-30px h-18px rounded-4px text-12px text-center bg-gray-200 font-semibold"
            style={{ color: info.level > 5 ? 'white' : 'black', backgroundColor: getLevelColor(info.level) }}
          >
            {info.level}
          </div>
          <div
            className="w-30px h-18px rounded-4px text-12px text-center bg-gray-200 font-semibold"
            style={{ color: info.horror > 5 ? 'white' : 'black', backgroundColor: getHorrorColor(info.horror) }}
          >
            {info.horror === 0 ? '-' : info.horror}
          </div>
        </div>
      </div>
    </>
  );
}
