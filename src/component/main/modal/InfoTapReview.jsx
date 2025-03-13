export default function InfoTapReview({ short, comment }) {
  return (
    <div className="mt-4">
      <div className="text-18px mb-4 font-semibold">{short}</div>
      <div className="md:h-400px md:overflow-y-scroll md:scroll-overlay text-14px text-justify whitespace-pre-wrap">
        {comment}
      </div>
    </div>
  );
}
