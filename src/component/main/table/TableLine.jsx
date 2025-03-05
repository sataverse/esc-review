import { useModal } from '../../../module/store';
import { getScoreColor, getLevelColor, getHorrorColor } from '../../../module/util';

export default function TableLine({ info }) {
  const { setThemeId } = useModal();

  return (
    <div className="table-line">
      <div className="w-60px text-center">{info.id}</div>
      <div
        className="w-260px"
        style={{ cursor: isNaN(info.id) ? 'default' : 'pointer' }}
        onClick={() => !isNaN(info.id) && setThemeId(info.id)}
      >
        {info.theme}
      </div>
      <div className="w-60px text-center">{info.place}</div>
      <div className="w-140px">{info.brand}</div>
      <div className="w-140px">{info.store}</div>
      <div className="w-60px md:w-50px text-center font-semibold" style={{ color: getScoreColor(info.score)[1] }}>
        {isNaN(info.score) ? info.score : info.score.toFixed(1)}
      </div>
      <div
        className="w-50px text-center font-semibold"
        style={{ color: info.level > 5 ? 'white' : 'black', backgroundColor: getLevelColor(info.level) }}
      >
        {info.level}
      </div>
      <div
        className="w-50px text-center font-semibold"
        style={{ color: info.horror > 5 ? 'white' : 'black', backgroundColor: getHorrorColor(info.horror) }}
      >
        {info.horror === 0 ? '-' : info.horror}
      </div>
      <div className="w-108px md:w-100px text-center">{info.date}</div>
      <div className="w-80px text-center">
        {info.release.split('.').length < 2
          ? info.release
          : `${info.release.split('.')[0]}.${info.release.split('.')[1]}`}
      </div>
    </div>
  );
}
