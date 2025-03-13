export default function InfoTapBasic({ themeInfo }) {
  const { theme, place, brand, store, genre, date, release, price, hint, time, player, difficulty } = themeInfo;
  return (
    <div className="mt-4">
      <div className="text-20px font-medium -mb-2px">{theme}</div>
      <div className="text-14px mb-8px text-gray-500">{`${place} • ${brand} ${store}`}</div>
      <div className="w-full h-1px mb-2 bg-gray-200" />
      <div className="text-14px flex">
        <div className="flex">
          <div className="w-78px text-gray-500">{'플레이 타임'}</div>
          <div className="w-80px">{time[1]}</div>
        </div>
        <div className="flex">
          <div className="w-38px text-gray-500">{'가격'}</div>
          <div>{`${price[0]}${price[1] !== '' ? ` (${price[1]})` : ''}`}</div>
        </div>
      </div>
      <div className="text-14px flex">
        <div className="flex">
          <div className="w-78px text-gray-500">{'공식 난이도'}</div>
          <div className="w-80px">{difficulty}</div>
        </div>
        <div className="flex">
          <div className="w-38px text-gray-500">{'장르'}</div>
          <div>{`${genre[0]}${genre[1] !== '' ? `/${genre[1]}` : ''}`}</div>
        </div>
      </div>
      <div className="text-14px flex">
        <div className="flex">
          <div className="w-78px text-gray-500">{'힌트 제한'}</div>
          <div className="w-80px">{hint[1] === -1 ? '무제한' : `${hint[1]}개`}</div>
        </div>
        <div className="flex">
          <div className="w-38px text-gray-500">{'오픈'}</div>
          <div>{release.slice(0, 7)}</div>
        </div>
      </div>
      <div>
        <div className="mb-2px text-14px text-gray-500">{'기록'}</div>
        <div className="w-220px p-6px bg-gray-100 rounded-4px">
          <div className="text-14px">{`${date} • ${player[0]}인`}</div>
          <div className="flex items-center gap-2">
            <div className="flex items-baseline gap-1px">
              <div
                style={{
                  color:
                    hint[0] === 0
                      ? 'var(--indigo-500)'
                      : hint[1] !== -1 && hint[0] > hint[1]
                      ? 'var(--red-500)'
                      : 'black',
                }}
              >
                {hint[0]}
              </div>
              <div
                className="text-12px text-gray-500"
                style={{
                  color:
                    hint[0] === 0
                      ? 'var(--indigo-500)'
                      : hint[1] !== -1 && hint[0] > hint[1]
                      ? 'var(--red-500)'
                      : 'black',
                }}
              >
                {'Hint'}
              </div>
            </div>
            <div>{'•'}</div>
            <div className="flex items-baseline gap-2px">
              <div style={{ color: time[0] === '타임 오버' ? 'var(--red-500)' : 'black' }}>{time[0]}</div>
              <div className="text-12px text-gray-500">{`/${time[1]}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
