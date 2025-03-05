import TableLine from './TableLine';
import TableLineSmall from './TableLineSmall';

export default function TableBody({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="even:bg-gray-100">
          <div className="hidden md:block">
            <TableLine info={item} />
          </div>
          <div className="md:hidden">
            <TableLineSmall info={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
