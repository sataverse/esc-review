import { Rainbow } from '../../Icons';
import { getScoreColor } from '../../../module/util';
import { useMemo } from 'react';

function getScaleText(scale) {
  if (scale > 5) {
    return '최상';
  } else if (scale > 4) {
    return '상';
  } else if (scale > 3) {
    return '중상';
  } else if (scale > 2) {
    return '중';
  } else if (scale > 1) {
    return '중하';
  } else {
    return '하';
  }
}

function getBrightnessText(brightness) {
  if (brightness > 4) {
    return '밝음';
  } else if (brightness > 3) {
    return '다소 밝음';
  } else if (brightness > 2) {
    return '보통';
  } else if (brightness > 1) {
    return '다소 어두움';
  } else if (brightness > 0) {
    return '어두움';
  } else {
    return '매우 어두움';
  }
}

function getScoreText(score) {
  if (score === -1) {
    return '?';
  } else if (score === 0) {
    return '-';
  } else {
    return score;
  }
}

function GradeText({ text, isBig }) {
  return <div style={{ color: isBig ? 'black' : 'var(--gray-400)', fontSize: isBig ? 'auto' : '0.75rem' }}>{text}</div>;
}

function DetailScore({ text, score, color }) {
  return (
    <div className="flex items-center">
      <div style={{ color: color }}>{'●'}</div>
      <div className="w-80px text-14px text-right">{text}</div>
      <div
        className="w-24px ml-2 text-center font-semibold"
        style={{
          color:
            score <= 0
              ? 'var(--gray-400)'
              : score > 11
              ? 'var(--fuchsia-500)'
              : score > 10
              ? 'var(--indigo-500)'
              : 'black',
        }}
      >
        {getScoreText(score)}
      </div>
    </div>
  );
}

function AdditionalInfoCell({ property, children }) {
  return (
    <div className="w-84px h-48px pt-2px pr-4px pl-4px border-1px border-gray-300 rounded-4px flex flex-col justify-between">
      <div className="text-12px text-gray-600">{property}</div>
      <div className="w-full flex flex-row-reverse">{children}</div>
    </div>
  );
}

function CustomNumber({ num }) {
  return (
    <div className="flex items-baseline gap-2px">
      <div className="font-semibold" style={{ color: num >= 10 ? 'var(--red-500)' : 'black' }}>
        {getScoreText(num)}
      </div>
      <div className="text-10px text-gray-400">{'/'}</div>
      <div className="text-10px text-gray-400">{'10'}</div>
    </div>
  );
}

export default function InfoTapScore({ themeInfo }) {
  const {
    score,
    interior,
    story,
    direction,
    puzzle,
    device,
    special,
    level,
    horror,
    activity,
    player,
    scale,
    brightness,
  } = themeInfo;
  const num = useMemo(() => {
    return (
      (special > 0 ? 1 : 0) +
      (interior > 0 ? 1 : 0) +
      (story > 0 ? 1 : 0) +
      (direction > 0 ? 1 : 0) +
      (puzzle > 0 ? 1 : 0) +
      (device > 0 ? 1 : 0)
    );
  }, []);
  const sum = useMemo(() => {
    return (
      (special > 0 ? special : 0) +
      (interior > 0 ? interior : 0) +
      (story > 0 ? story : 0) +
      (direction > 0 ? direction : 0) +
      (puzzle > 0 ? puzzle : 0) +
      (device > 0 ? device : 0)
    );
  }, []);

  return (
    <div className="mt-4 flex flex-col">
      <div className="text-28px font-semibold -mt-2 -mb-2" style={{ color: getScoreColor(score)[1] }}>
        {score.toFixed(1)}
      </div>
      <div className="h-30px flex gap-1 items-center">
        <GradeText text={'흙길'} isBig={score < 5.0} />
        <GradeText text={'-'} isBig={score < 5.0 && score > 3.9} />
        <GradeText text={'풀길'} isBig={score < 7.0 && score > 3.9} />
        <GradeText text={'-'} isBig={score < 7.0 && score > 5.9} />
        <GradeText text={'풀꽃길'} isBig={score < 8.0 && score > 5.9} />
        <GradeText text={'-'} isBig={score < 8.0 && score > 7.4} />
        <GradeText text={'꽃길'} isBig={score < 9.0 && score > 7.4} />
        <GradeText text={'-'} isBig={score < 9.0 && score > 8.4} />
        <GradeText text={'꽃밭길'} isBig={score < 9.6 && score > 8.4} />
        <GradeText text={'-'} isBig={score === 9.5} />
        <GradeText text={'인생테마'} isBig={score > 9.4} />
      </div>
      <div className="w-full h-1px mt-2 mb-2 bg-gray-200" />
      <div className="mb-2">
        <DetailScore text={'인테리어'} score={interior} color={'var(--red-400)'} />
        <DetailScore text={'스토리'} score={story} color={'var(--orange-400)'} />
        <DetailScore text={'연출'} score={direction} color={'var(--yellow-400)'} />
        <DetailScore text={'문제 퀄리티'} score={puzzle} color={'var(--green-400)'} />
        <DetailScore text={'장치 퀄리티'} score={device} color={'var(--blue-400)'} />
        <DetailScore text={'창의성'} score={special} color={'var(--purple-400)'} />
      </div>
      <div>
        {sum / num > 10 ? (
          <div className="w-240px h-6px">
            <Rainbow width={240} height={6} />
          </div>
        ) : (
          <div className="w-240px h-6px bg-gray-300 rounded-full overflow-hidden flex">
            <div className="bg-red-400 h-6px" style={{ width: `${(interior / (10 * num)) * 100}%` }} />
            <div className="bg-orange-400 h-6px" style={{ width: `${(story / (10 * num)) * 100}%` }} />
            <div className="bg-yellow-400 h-6px" style={{ width: `${(direction / (10 * num)) * 100}%` }} />
            <div className="bg-green-400 h-6px" style={{ width: `${(puzzle / (10 * num)) * 100}%` }} />
            <div className="bg-blue-400 h-6px" style={{ width: `${(device / (10 * num)) * 100}%` }} />
            <div className="bg-purple-400 h-6px" style={{ width: `${(special / (10 * num)) * 100}%` }} />
          </div>
        )}
        <div className="w-240px text-14px text-right font-semibold">{(sum / num).toFixed(2)}</div>
      </div>
      <div className="w-full h-1px mt-2 mb-2 bg-gray-200" />
      <div className="flex flex-col md:flex-row gap-1">
        <div className="flex gap-1">
          <AdditionalInfoCell property={'난이도'} children={<CustomNumber num={level} />} />
          <AdditionalInfoCell property={'공포도'} children={<CustomNumber num={horror} />} />
          <AdditionalInfoCell property={'활동성'} children={<CustomNumber num={activity} />} />
        </div>
        <div className="flex gap-1">
          <AdditionalInfoCell
            property={'추천 인원'}
            children={
              <div className="text-14px">
                {`${player[1] === player[2] ? player[1] : `${player[1]}~${player[2]}`}인`}
              </div>
            }
          />
          <AdditionalInfoCell
            property={'테마 규모'}
            children={
              <div className="text-14px" style={{ color: scale === 6 ? 'var(--red-500)' : 'black' }}>
                {getScaleText(scale)}
              </div>
            }
          />
          <AdditionalInfoCell
            property={'조도'}
            children={
              <div className="text-14px" style={{ color: brightness === 0 ? 'var(--red-500)' : 'black' }}>
                {getBrightnessText(brightness)}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
