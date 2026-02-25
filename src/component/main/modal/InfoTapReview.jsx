export default function InfoTapReview({ comment }) {
  return (
    <div className="mt-4">
      <div className="md:h-400px md:overflow-y-scroll md:scroll-overlay text-14px text-justify whitespace-pre-wrap">
        {comment}
      </div>
    </div>
  );
}
