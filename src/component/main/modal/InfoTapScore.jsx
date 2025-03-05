import { PlusIcon, ScoreBarLeft, ScoreBarRight } from '../../Icons';
import { getScoreColor, getLevelColor, getHorrorColor, getActivityColor } from '../../../module/util';

function getGradeText(score) {
  if (score > 9.5) {
    return '💘 인생테마 💘';
  } else if (score === 9.5) {
    return '💐💐 꽃밭길+ 💐💐';
  } else if (score > 8.9) {
    return '💐 꽃밭길 💐';
  } else if (score > 8.4) {
    return '🌸🌸 꽃길+ 🌸🌸';
  } else if (score > 7.9) {
    return '🌸 꽃길 🌸';
  } else if (score > 7.4) {
    return '🍀🍀 풀꽃길+ 🍀🍀';
  } else if (score > 6.9) {
    return '🍀 풀꽃길 🍀';
  } else if (score > 5.9) {
    return '🌿🌿 풀길+ 🌿🌿';
  } else if (score > 4.9) {
    return '🌿 풀길 🌿';
  } else {
    return '🌵 흙길 🌵';
  }
}

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

function ScoreBar({ text, score }) {
  const arr = [0, 2, 4, 6, 8];
  return (
    <div className="w-335px flex items-center">
      <div
        className="w-68px text-14px text-right mr-2"
        style={{ color: score > 10 ? 'var(--blue-500)' : 'black', fontWeight: score > 10 ? '600' : '400' }}
      >
        {text}
      </div>
      <div className="mr-1 flex gap-6px">
        {arr.map((item, idx) => (
          <div key={idx} className="flex">
            <ScoreBarLeft width={20} height={8} fill={score > item ? 'black' : 'white'} />
            <ScoreBarRight width={20} height={8} fill={score > item + 1 ? 'black' : 'white'} />
          </div>
        ))}
      </div>
      {score > 10 ? <PlusIcon size={14} fill={'black'} /> : null}
      {score > 11 ? <PlusIcon size={14} fill={'black'} /> : null}
    </div>
  );
}

export default function InfoTapScore({ themeInfo }) {
  const { score, interior, story, direction, puzzle, device, special, level, horror, activity, scale, brightness } =
    themeInfo;
  return (
    <div className="mt-1 flex flex-col items-center">
      <div className="text-48px font-semibold -mb-3" style={{ color: getScoreColor(score)[1] }}>
        {score.toFixed(1)}
      </div>
      <div className="h-30px text-14px mb-4 flex gap-1 items-center">
        <div style={{ color: score < 5.0 ? 'black' : 'var(--gray-400)', fontSize: score < 5.0 ? '1.125rem' : 'auto' }}>
          {'흙길'}
        </div>
        <div
          style={{
            color: score < 5.0 && score > 3.9 ? 'black' : 'var(--gray-400)',
            fontSize: score < 5.0 && score > 3.9 ? '1.125rem' : 'auto',
          }}
        >
          {'-'}
        </div>
        <div
          style={{
            color: score < 7.0 && score > 3.9 ? 'black' : 'var(--gray-400)',
            fontSize: score < 7.0 && score > 3.9 ? '1.125rem' : 'auto',
          }}
        >
          {'풀길'}
        </div>
        <div
          style={{
            color: score < 7.0 && score > 5.9 ? 'black' : 'var(--gray-400)',
            fontSize: score < 7.0 && score > 5.9 ? '1.125rem' : 'auto',
          }}
        >
          {'-'}
        </div>
        <div
          style={{
            color: score < 8.0 && score > 5.9 ? 'black' : 'var(--gray-400)',
            fontSize: score < 8.0 && score > 5.9 ? '1.125rem' : 'auto',
          }}
        >
          {'풀꽃길'}
        </div>
        <div
          style={{
            color: score < 8.0 && score > 7.4 ? 'black' : 'var(--gray-400)',
            fontSize: score < 8.0 && score > 7.4 ? '1.125rem' : 'auto',
          }}
        >
          {'-'}
        </div>
        <div
          style={{
            color: score < 9.0 && score > 7.4 ? 'black' : 'var(--gray-400)',
            fontSize: score < 9.0 && score > 7.4 ? '1.125rem' : 'auto',
          }}
        >
          {'꽃길'}
        </div>
        <div
          style={{
            color: score < 9.0 && score > 8.4 ? 'black' : 'var(--gray-400)',
            fontSize: score < 9.0 && score > 8.4 ? '1.125rem' : 'auto',
          }}
        >
          {'-'}
        </div>
        <div
          style={{
            color: score < 9.6 && score > 8.4 ? 'black' : 'var(--gray-400)',
            fontSize: score < 9.6 && score > 8.4 ? '1.125rem' : 'auto',
          }}
        >
          {'꽃밭길'}
        </div>
        <div
          style={{ color: score === 9.5 ? 'black' : 'var(--gray-400)', fontSize: score === 9.5 ? '1.125rem' : 'auto' }}
        >
          {'-'}
        </div>
        <div style={{ color: score > 9.4 ? 'black' : 'var(--gray-400)', fontSize: score > 9.4 ? '1.125rem' : 'auto' }}>
          {'인생테마'}
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-8px">
        <ScoreBar text={'인테리어'} score={interior} />
        <ScoreBar text={'스토리'} score={story} />
        <ScoreBar text={'연출'} score={direction} />
        <ScoreBar text={'문제 퀄리티'} score={puzzle} />
        <ScoreBar text={'장치 퀄리티'} score={device} />
        <ScoreBar text={'창의성'} score={special} />
      </div>
      <div className="w-350px border-t-1px border-b-1px border-gray-400 flex">
        <div className="flex flex-col justify-between items-center w-68px h-50px p-2px">
          <div className="text-12px text-gray-600">{'난이도'}</div>
          <div className="flex items-baseline gap-2px">
            <div className="text-18px" style={{ color: level >= 10 ? 'var(--red-500)' : 'black' }}>
              {level}
            </div>
            <div className="text-12px text-gray-400">{'/'}</div>
            <div className="text-12px text-gray-400">{'10'}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-68px h-50px p-2px">
          <div className="text-12px text-gray-600">{'공포도'}</div>
          <div className="flex items-baseline gap-2px">
            <div className="text-18px" style={{ color: horror >= 10 ? 'var(--red-500)' : 'black' }}>
              {horror === 0 ? '-' : horror}
            </div>
            <div className="text-12px text-gray-400">{'/'}</div>
            <div className="text-12px text-gray-400">{'10'}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-68px h-50px p-2px">
          <div className="text-12px text-gray-600">{'활동성'}</div>
          <div className="flex items-baseline gap-2px">
            <div className="text-18px" style={{ color: activity >= 10 ? 'var(--red-500)' : 'black' }}>
              {activity}
            </div>
            <div className="text-12px text-gray-400">{'/'}</div>
            <div className="text-12px text-gray-400">{'10'}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-68px h-50px pt-2px pb-3px">
          <div className="text-12px text-gray-600">{'테마 규모'}</div>
          <div className="text-15px" style={{ color: scale === 6 ? 'var(--red-500)' : 'black' }}>
            {getScaleText(scale)}
          </div>
        </div>
        <div className="flex flex-col justify-between items-center w-78px h-50px p-2px">
          <div className="text-12px text-gray-600">{'조도'}</div>
          <div className="text-14px" style={{ color: brightness === 0 ? 'var(--red-500)' : 'black' }}>
            {getBrightnessText(brightness)}
          </div>
        </div>
      </div>
    </div>
  );
}
