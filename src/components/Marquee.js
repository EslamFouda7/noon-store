import Marquee from "react-fast-marquee";


function marquee() {
  const images = [
  "oraimo.webp",
  "hp.png",
  "adidas.png",
  "Lipton-Logo.png",
  "Samsung.png",
  "oxi.png",
  "juhayna.png",
  "Fresh.png"
];
  return (
    <Marquee
      speed={100}
      gradient={true}
      className="image-ticker"
    >
      {images.map((src, i) => (
        <div key={i} className="ticker-item mx-5">
          <img src={src} alt={`img-${i}`} className="img-fluid" width={100}/>
        </div>
      ))}
    </Marquee>
  );
}
export default marquee;
