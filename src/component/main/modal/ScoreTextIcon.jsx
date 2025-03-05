export default function ScoreTextIcon({ icon, score }) {
  return (
    <div className="flex items-stretch md:items-center gap-1px md:gap-2px">
      <div>{icon}</div>
      <div className="flex items-baseline gap-1px md:gap-2px">
        <div className="text-14px md:text-18px font-semibold">{score}</div>
        <div className="text-8px md:text-10px text-gray-400">{'/ 10'}</div>
      </div>
    </div>
  );
}
