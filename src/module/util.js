const location = {
  강남: 0,
  건대: 1,
  노원: 2,
  대학로: 3,
  동대문: 4,
  마곡: 5,
  서울대: 6,
  성수: 7,
  성신여대: 8,
  수유: 9,
  신림: 10,
  신사: 11,
  신촌: 12,
  잠실: 13,
  종각: 14,
  홍대: 15,
  인천: 20,
  김포: 21,
  동탄: 22,
  부천: 23,
  산본: 24,
  성남: 25,
  수원: 26,
  안산: 27,
  안양: 28,
  용인: 29,
  의정부: 30,
  일산: 31,
  하남: 32,
  원주: 40,
  대전: 50,
  아산: 51,
  천안: 52,
  광주: 50,
  대구: 60,
  부산: 61,
};

export const sorts = [
  { id: 0, text: '최신순', func: (data) => data.reverse() },
  { id: 1, text: '오래된 순', func: (data) => data },
  {
    id: 2,
    text: '테마 이름순',
    func: (data) => data.sort((a, b) => (a.theme.toLowerCase() > b.theme.toLowerCase() ? 1 : -1)),
  },
  {
    id: 3,
    text: '지역 순',
    func: (data) =>
      data.sort((a, b) => {
        if (a.place === b.place) {
          if (a.brand === b.brand) {
            return a.store > b.store ? 1 : -1;
          }
          return a.brand > b.brand ? 1 : -1;
        }
        return location[a.place] > location[b.place] ? 1 : -1;
      }),
  },
  {
    id: 4,
    text: '매장 이름순',
    func: (data) =>
      data.sort((a, b) => (a.brand !== b.brand ? (a.brand > b.brand ? 1 : -1) : a.store > b.store ? 1 : -1)),
  },
  { id: 5, text: '점수 높은 순', func: (data) => data.sort((a, b) => b.score - a.score) },
  { id: 6, text: '쉬운 순', func: (data) => data.sort((a, b) => a.level - b.level) },
  { id: 7, text: '어려운 순', func: (data) => data.sort((a, b) => b.level - a.level) },
  { id: 8, text: '공포도 순', func: (data) => data.sort((a, b) => b.horror - a.horror) },
];

export function getScoreColor(score) {
  if (score > 9.5) {
    return ['var(--blue-100)', 'var(--blue-500)'];
  } else if (score > 8.9) {
    return ['var(--green-100)', 'var(--green-500)'];
  } else if (score > 7.9) {
    return ['var(--yellow-100)', 'var(--yellow-500)'];
  } else if (score > 6.9) {
    return ['var(--orange-100)', 'var(--orange-500)'];
  } else if (score > 4.9) {
    return ['var(--red-100)', 'var(--red-500)'];
  } else if (score > 0.0) {
    return ['var(--gray-300)', 'var(--gray-500)'];
  } else {
    return ['auto', 'auto'];
  }
}

export function getLevelColor(level) {
  if (level > 9) {
    return 'var(--red-950)';
  } else if (level > 8) {
    return 'var(--red-900)';
  } else if (level > 7) {
    return 'var(--red-800)';
  } else if (level > 6) {
    return 'var(--red-700)';
  } else if (level > 5) {
    return 'var(--red-600)';
  } else if (level > 4) {
    return 'var(--red-500)';
  } else if (level > 3) {
    return 'var(--red-400)';
  } else if (level > 2) {
    return 'var(--red-300)';
  } else if (level > 1) {
    return 'var(--red-200)';
  } else if (level > 0) {
    return 'var(--red-100)';
  } else {
    return 'auto';
  }
}

export function getHorrorColor(horror) {
  if (horror > 9) {
    return 'var(--violet-950)';
  } else if (horror > 8) {
    return 'var(--violet-900)';
  } else if (horror > 7) {
    return 'var(--violet-800)';
  } else if (horror > 6) {
    return 'var(--violet-700)';
  } else if (horror > 5) {
    return 'var(--violet-600)';
  } else if (horror > 4) {
    return 'var(--violet-500)';
  } else if (horror > 3) {
    return 'var(--violet-400)';
  } else if (horror > 2) {
    return 'var(--violet-300)';
  } else if (horror > 1) {
    return 'var(--violet-200)';
  } else if (horror > 0) {
    return 'var(--violet-100)';
  } else if (horror === 0) {
    return 'var(--violet-50)';
  } else {
    return 'auto';
  }
}

export function getActivityColor(activity) {
  if (activity > 9) {
    return 'var(--teal-950)';
  } else if (activity > 8) {
    return 'var(--teal-900)';
  } else if (activity > 7) {
    return 'var(--teal-800)';
  } else if (activity > 6) {
    return 'var(--teal-700)';
  } else if (activity > 5) {
    return 'var(--teal-600)';
  } else if (activity > 4) {
    return 'var(--teal-500)';
  } else if (activity > 3) {
    return 'var(--teal-400)';
  } else if (activity > 2) {
    return 'var(--teal-300)';
  } else if (activity > 1) {
    return 'var(--teal-200)';
  } else if (activity > 0) {
    return 'var(--teal-100)';
  } else if (activity === 0) {
    return 'var(--gray-100)';
  } else {
    return 'auto';
  }
}

export function preventScroll() {
  const currentScrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${currentScrollY}px`;
  return currentScrollY;
}

export function allowScroll(prevScrollY) {
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.top = '';
  window.scrollTo(0, prevScrollY);
}
