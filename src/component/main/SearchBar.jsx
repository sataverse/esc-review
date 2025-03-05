import { useEffect, useRef, useState } from 'react';
import { CancelIcon, SearchIcon } from '../Icons';
import { useSearchWord } from '../../module/store';

export default function SearchBar() {
  const { searchWord, setSearchWord } = useSearchWord();
  const [isFocused, setIsFocused] = useState(false);
  const [tempSearchWord, setTempSearchWord] = useState(searchWord);
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setSearchWord(tempSearchWord), 500);
    return () => clearTimeout(timer);
  }, [tempSearchWord]);

  return (
    <div
      className="flex justify-between items-center w-250px md:w-400px h-32px p-4px border-2px bg-white"
      style={{ borderColor: isFocused ? 'black' : 'transparent' }}
    >
      <button onClick={() => inputRef.current.focus()}>
        <SearchIcon size={24} fill={'var(--gray-400)'} />
      </button>
      <input
        type="text"
        className="w-180px md:w-320px h-28px"
        value={tempSearchWord}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setTempSearchWord(e.target.value)}
      />
      <button className="animation hover:rotate-90" onClick={() => setSearchWord('')}>
        <CancelIcon size={24} fill={'var(--gray-400)'} />
      </button>
    </div>
  );
}
