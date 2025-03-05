import { create } from 'zustand';

const sortStore = create((set) => ({
  sortId: 0,
  setSortId: (id) => {
    set({ sortId: id });
  },
}));

export function useSort() {
  const sortId = sortStore((state) => state.sortId);
  const setSortId = sortStore((state) => state.setSortId);

  return { sortId, setSortId };
}

const searchWordStore = create((set) => ({
  searchWord: '',
  setSearchWord: (str) => set({ searchWord: str }),
}));

export function useSearchWord() {
  const searchWord = searchWordStore((state) => state.searchWord);
  const setSearchWord = searchWordStore((state) => state.setSearchWord);

  return { searchWord, setSearchWord };
}

const modalStore = create((set) => ({
  themeId: 0,
  setThemeId: (id) => set({ themeId: id }),
}));

export function useModal() {
  const themeId = modalStore((state) => state.themeId);
  const setThemeId = modalStore((state) => state.setThemeId);

  return { themeId, setThemeId };
}
