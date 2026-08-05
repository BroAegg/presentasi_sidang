export default function Footer({ current, total }) {
  return (
    <div className="slide-footer">
      <span>Aegner Billik - 220102007</span>
      <span>Slide {current}/{total}</span>
    </div>
  );
}
