import { getLevelColor, getScoreColor } from '../../../module/util';
import InfoTapBasic from './InfoTapBasic';
import ScoreTextIcon from './ScoreTextIcon';
import { InstagramIcon, LockIcon, StarIcon } from '../../Icons';
import { useState } from 'react';
import InfoTapSynopsis from './InfoTapSynopsis';
import InfoTapScore from './InfoTapScore';
import InfoTapReview from './InfoTapReview';

function VisibleInfoSelectButton({ text, clicked, onClickFunc }) {
  return (
    <button
      className="w-80px p-1px border-b-2px border-b-transparent hover:border-b-gray-300"
      style={{ borderBottomColor: clicked ? 'var(--indigo-500)' : '' }}
      onClick={() => onClickFunc()}
    >
      {text}
    </button>
  );
}

export default function DetailModalContent({ themeInfo }) {
  const [visibleInfoNum, setVisibleInfoNum] = useState(0);

  return (
    <>
      <div className="box-shadow-bottom w-full h-[4.5rem] md:h-[12%] p-8px flex flex-col justify-between md:flex-row md:items-center">
        <div className="text-20px md:text-32px">{themeInfo.theme}</div>
        <div className="hidden md:flex gap-12px">
          <ScoreTextIcon
            icon={<StarIcon size={26} fill={getScoreColor(themeInfo.score)[1]} />}
            score={themeInfo.score.toFixed(1)}
          />
          <ScoreTextIcon icon={<LockIcon size={26} fill={getLevelColor(themeInfo.level)} />} score={themeInfo.level} />
          <div
            className="rounded-8px cursor-pointer hover:bg-gray-200"
            style={{ display: themeInfo.instagram === '' ? 'none' : 'block' }}
            onClick={() => window.open(themeInfo.instagram, '_blank')}
          >
            <img width={28} height={28} alt={'instagram'} src={`${process.env.PUBLIC_URL}/uiimage/instagram.png`} />
          </div>
        </div>
        <div className="flex gap-12px md:hidden">
          <ScoreTextIcon
            icon={<StarIcon size={20} fill={getScoreColor(themeInfo.score)[1]} />}
            score={themeInfo.score.toFixed(1)}
          />
          <ScoreTextIcon icon={<LockIcon size={20} fill={getLevelColor(themeInfo.level)} />} score={themeInfo.level} />
          <div
            className="rounded-8px cursor-pointer hover:bg-gray-200"
            style={{ display: themeInfo.instagram === '' ? 'none' : 'block' }}
            onClick={() => window.open(themeInfo.instagram, '_blank')}
          >
            <img width={20} height={20} alt={'instagram'} src={`${process.env.PUBLIC_URL}/uiimage/instagram.png`} />
          </div>
        </div>
      </div>
      <div className="w-full h-[27.5rem] md:h-[88%] flex flex-col md:flex-row scroll-overlay overflow-y-scroll md:overflow-y-hidden">
        <div className="w-full md:w-[36%] max-h-[27.5rem] md:max-h-max md:bg-transparent">
          <img
            className="w-full h-full object-contain object-center md:object-top"
            src={`${process.env.PUBLIC_URL}${themeInfo.image.substr(1)}`}
            alt={themeInfo.theme}
          />
        </div>
        <div className="w-full md:w-[64%] p-12px">
          <div className="flex gap-4">
            <VisibleInfoSelectButton
              text={'기본 정보'}
              clicked={visibleInfoNum === 0}
              onClickFunc={() => setVisibleInfoNum(0)}
            />
            <VisibleInfoSelectButton
              text={'시놉시스'}
              clicked={visibleInfoNum === 1}
              onClickFunc={() => setVisibleInfoNum(1)}
            />
            <VisibleInfoSelectButton
              text={'상세 평가'}
              clicked={visibleInfoNum === 2}
              onClickFunc={() => setVisibleInfoNum(2)}
            />
            <VisibleInfoSelectButton
              text={'후기 글'}
              clicked={visibleInfoNum === 3}
              onClickFunc={() => setVisibleInfoNum(3)}
            />
          </div>
          <div className="min-h-[23.5rem]">
            {visibleInfoNum === 0 ? <InfoTapBasic themeInfo={themeInfo} /> : null}
            {visibleInfoNum === 1 ? <InfoTapSynopsis synopsis={themeInfo.synopsis} /> : null}
            {visibleInfoNum === 2 ? <InfoTapScore themeInfo={themeInfo} /> : null}
            {visibleInfoNum === 3 ? <InfoTapReview short={themeInfo.short} comment={themeInfo.comment} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
