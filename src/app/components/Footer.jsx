export default function Footer({ current, total }) {
  return (
    <div className="slide-footer">
      <span>Aegner Billik (220102007) | Universitas Muhammadiyah Bandung</span>
      <span>Slide {current}/{total}</span>
    </div>
  );
}
