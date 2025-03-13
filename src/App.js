import data from './data/review.json';
import MainPage from './component/main/MainPage';
import { useState, useEffect } from 'react';
import { useModal } from './module/store';
import { allowScroll, preventScroll } from './module/util';
import DetailModal from './component/main/modal/DetailModal';

function App() {
  const { themeId } = useModal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (themeId === 0) {
      allowScroll(scrollY);
    } else {
      const y = preventScroll();
      setScrollY(y);
    }
  }, [themeId]);

  return (
    <>
      <MainPage />
      <DetailModal themeId={themeId} themeInfo={themeId === 0 ? null : data[themeId - 1]} />
    </>
  );
}

export default App;
