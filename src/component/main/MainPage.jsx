import data from '../../data/review.json';
import FloatTool from './FloatTool';
import TableHeader from './table/TableHeader';
import TableBody from './table/TableBody';
import ImageGrid from './grid/ImageGrid';
import SearchBar from './SearchBar';
import SortSelect from './SortSelect';
import { useEffect, useState } from 'react';
import { sorts } from '../../module/util';
import { useMode, useSort, useSearchWord } from '../../module/store';

export default function MainPage({}) {
  const [currentData, setCurrentData] = useState(data);
  const { mode } = useMode();
  const { sortId } = useSort();
  const { searchWord } = useSearchWord();

  useEffect(() => {
    let tempData = [...data];
    tempData = sorts[sortId].func([...tempData]);
    if (searchWord !== '') {
      tempData = tempData.filter((item) => {
        const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
        const trimSearchWord = searchWord.replace(reg, '');
        const keywords = [item.theme.replace(reg, ''), ...item.keyword];
        for (var i = 0; i < keywords.length; i++) {
          if (keywords[i].toLowerCase().indexOf(trimSearchWord.toLowerCase()) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
    setCurrentData(tempData);
  }, [sortId, searchWord]);

  return (
    <div>
      <div className="sticky top-0 w-full flex flex-col items-center bg-white z-[2]">
        <div className="flex justify-center items-center gap-3 w-full h-48px bg-indigo-200 mb-8px">
          <SearchBar />
          <SortSelect />
        </div>
        {mode === 'table' ? <TableHeader /> : null}
      </div>
      <FloatTool />
      <div className="w-full flex flex-col items-center mb-80px md:mb-1 bg-white">
        {mode === 'table' ? <TableBody data={currentData} /> : <ImageGrid data={currentData} />}
      </div>
    </div>
  );
}
