import { useModal } from '../../../module/store';
import DetailModalContent from './DetailModalContent';

export default function DetailModal({ themeId, themeInfo }) {
  const { setThemeId } = useModal();
  return (
    <>
      <div
        className="fixed w-full h-dvh top-0 left-0 bg-gray-600 opacity-70 z-[98]"
        style={{ display: themeId === 0 ? 'none' : 'block' }}
        onClick={() => setThemeId(0)}
      />
      <div
        className="box-shadow-top animation md:hidden fixed w-full h-[32rem] left-0 bottom-0 bg-white z-[99]"
        style={{ transform: themeId === 0 ? 'translateY(34rem)' : 'translateY(0)' }}
      >
        {themeId === 0 ? null : <DetailModalContent themeInfo={themeInfo} />}
      </div>
      <div
        className="box-shadow animation hidden md:block fixed w-[54rem] h-[36rem] left-1/2 top-1/2 bg-white z-[99]"
        style={{
          transform: themeId === 0 ? 'translate(-50%, -50%) scale(0, 0)' : 'translate(-50%, -50%) scale(1, 1)',
        }}
      >
        {themeId === 0 ? null : <DetailModalContent themeInfo={themeInfo} />}
      </div>
    </>
  );
}
