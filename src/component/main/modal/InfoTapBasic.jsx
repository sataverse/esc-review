function BasicInfoCell({ property, value, size, color = 'black' }) {
  return (
    <div
      className="h-48px pt-2px pr-4px pb-2px pl-4px border-1px border-gray-300 rounded-4px flex flex-col justify-between"
      style={{ gridColumn: `span ${size} / span ${size}` }}
    >
      <div className="text-12px text-gray-600">{property}</div>
      <div className="w-full text-right text-14px" style={{ color: color }}>
        {value}
      </div>
    </div>
  );
}

export default function InfoTapBasic({ themeInfo }) {
  const { place, brand, store, genre, date, release, price, hint, time, player, difficulty } = themeInfo;
  return (
    <div className="mt-4">
      <div className="mb-20px">
        <div className="text-18px mb-4px">{'기본 정보'}</div>
        <div className="hidden md:grid grid-cols-9 gap-6px">
          <BasicInfoCell property={'지역'} value={place} size={2} />
          <BasicInfoCell property={'매장'} value={`${brand} ${store}`} size={4} />
          <BasicInfoCell property={'장르'} value={`${genre[0]}${genre[1] !== '' ? ` / ${genre[1]}` : ''}`} size={3} />
          <BasicInfoCell property={'제한 시간'} value={time[1]} size={2} />
          <BasicInfoCell property={'가격'} value={`${price[0]}${price[1] !== '' ? ` (${price[1]})` : ''}`} size={3} />
          <BasicInfoCell property={'오픈'} value={`${release.split('.')[0]}년 ${+release.split('.')[1]}월`} size={2} />
          <BasicInfoCell property={'힌트 제한'} value={hint[1] === -1 ? '무제한' : `${hint[1]}개`} size={2} />
          <BasicInfoCell property={'공식 난이도'} value={difficulty} size={2} />
          <BasicInfoCell
            property={'추천 인원'}
            value={`${player[1] === player[2] ? player[1] : `${player[1]}~${player[2]}`}인`}
            size={2}
          />
          <BasicInfoCell property={'기타 특이사항'} value={'준비 중...'} size={5} />
        </div>
        <div className="grid md:hidden grid-cols-9 gap-6px">
          <BasicInfoCell property={'지역'} value={place} size={2} />
          <BasicInfoCell property={'매장'} value={`${brand} ${store}`} size={7} />
          <BasicInfoCell property={'장르'} value={`${genre[0]}${genre[1] !== '' ? ` / ${genre[1]}` : ''}`} size={3} />
          <BasicInfoCell property={'제한 시간'} value={time[1]} size={2} />
          <BasicInfoCell property={'가격'} value={`${price[0]}${price[1] !== '' ? ` (${price[1]})` : ''}`} size={4} />
          <BasicInfoCell property={'오픈'} value={`${release.split('.')[0]}년 ${+release.split('.')[1]}월`} size={3} />
          <BasicInfoCell property={'힌트 제한'} value={hint[1] === -1 ? '무제한' : `${hint[1]}개`} size={3} />
          <BasicInfoCell property={'공식 난이도'} value={difficulty} size={3} />
          <BasicInfoCell property={'추천 인원'} value={`${player[1]}인`} size={2} />
          <BasicInfoCell property={'기타 특이사항'} value={'준비 중...'} size={7} />
        </div>
      </div>
      <div>
        <div className="text-18px mb-4px">{'탈출 기록'}</div>
        <div className="hidden md:grid grid-cols-9 gap-6px">
          <BasicInfoCell property={'플레이 날짜'} value={date} size={2} />
          <BasicInfoCell property={'플레이 인원'} value={`${player[0]}인`} size={2} />
          <BasicInfoCell
            property={'플레이 타임'}
            value={`${time[0]} / ${time[1]}`}
            size={3}
            color={time[0] === '타임 오버' ? 'var(--red-500)' : 'black'}
          />
          <BasicInfoCell
            property={'사용한 힌트'}
            value={`${hint[0]}개`}
            size={2}
            color={hint[0] === 0 ? 'var(--blue-500)' : hint[1] !== -1 && hint[0] > hint[1] ? 'var(--red-500)' : 'black'}
          />
        </div>
        <div className="grid md:hidden grid-cols-6 gap-6px">
          <BasicInfoCell property={'플레이 날짜'} value={date} size={4} />
          <BasicInfoCell property={'플레이 인원'} value={`${player[0]}인`} size={2} />
          <BasicInfoCell
            property={'플레이 타임'}
            value={`${time[0]} / ${time[1]}`}
            size={4}
            color={time[0] === '타임 오버' ? 'var(--red-500)' : 'black'}
          />
          <BasicInfoCell
            property={'사용한 힌트'}
            value={`${hint[0]}개`}
            size={2}
            color={hint[0] === 0 ? 'var(--blue-500)' : hint[1] !== -1 && hint[0] > hint[1] ? 'var(--red-500)' : 'black'}
          />
        </div>
      </div>
    </div>
  );
}
