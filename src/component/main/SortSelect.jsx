import { useSort } from '../../module/store';
import { sorts } from '../../module/util';

export default function SortSelect() {
  const { setSortId } = useSort();
  return (
    <select className="w-96px h-32px text-14px" onChange={(e) => setSortId(e.target.value)}>
      {sorts.map((data) => (
        <option key={data.id} value={data.id}>
          {data.text}
        </option>
      ))}
    </select>
  );
}
