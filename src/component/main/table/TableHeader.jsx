import TableLine from './TableLine';
import TableLineSmall from './TableLineSmall';

export default function TableHeader({}) {
  return (
    <>
      <div className="table-header hidden md:block border-black border-t-1px">
        <TableLine
          info={{
            id: 'No.',
            theme: '테마명 (자세히 보려면 클릭)',
            place: '지역',
            brand: '브랜드',
            store: '매장',
            score: '점수',
            level: '레벨',
            horror: '공포',
            date: '플레이 날짜',
            release: '오픈',
          }}
        />
      </div>
      <div className="table-header md:hidden border-black border-t-1px">
        <TableLineSmall
          info={{
            id: 'No.',
            theme: '테마명 (자세히 보려면 클릭)',
            place: '지역',
            brand: '',
            store: '매장',
            score: '점수',
            level: '레벨',
            horror: '공포',
          }}
        />
      </div>
    </>
  );
}
