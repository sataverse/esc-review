import data from './data/review.json';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainPage from './component/main/MainPage';
import TableBody from './component/main/table/TableBody';
import ImageGrid from './component/main/grid/ImageGrid';
import { useModal, useSearchWord, useSort } from './module/store';
import { allowScroll, preventScroll, sorts } from './module/util';
import DetailModal from './component/main/modal/DetailModal';

function App() {
  const { sortId } = useSort();
  const { searchWord } = useSearchWord();
  const { themeId } = useModal();
  const [currentData, setCurrentData] = useState(data);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (themeId === 0) {
      allowScroll(scrollY);
    } else {
      const y = preventScroll();
      console.log(y);
      setScrollY(y);
    }
  }, [themeId]);

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
    <BrowserRouter>
      <Routes>
        <Route path="/main/*" element={<MainPage />}>
          <Route path="table" element={<TableBody data={currentData} />} />
          <Route path="grid" element={<ImageGrid data={currentData} />} />
        </Route>
      </Routes>
      <DetailModal themeId={themeId} themeInfo={themeId === 0 ? null : data[themeId - 1]} />
    </BrowserRouter>
  );
}

export default App;
