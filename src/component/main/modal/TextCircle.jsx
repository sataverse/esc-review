export default function TextCircle({ size, fontSize, borderWidth, color, text }) {
  return (
    <div
      className="rounded-full text-center flex items-center justify-center"
      style={{
        width: size,
        height: size,
        borderWidth: borderWidth,
        borderColor: color,
      }}
    >
      <div style={{ fontSize: fontSize, color: color }}>{text}</div>
    </div>
  );
}
