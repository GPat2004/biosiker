// Gyors (kb. 200ms), sima 3D flip - tiszta CSS transformmal, nem
// framer-motion springgel, hogy a megfordulás pörgős, ne hosszadalmas
// legyen. A szülő felelős a magasságért (pl. className="h-80").
const FlipCard = ({ front, back, isFlipped, onFlip, className = '' }) => (
  <div className={`relative perspective-1000 cursor-pointer ${className}`} onClick={onFlip}>
    <div
      className="relative w-full h-full preserve-3d transition-transform duration-200 ease-out"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
    >
      <div className="absolute inset-0 backface-hidden">{front}</div>
      <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
        {back}
      </div>
    </div>
  </div>
);

export default FlipCard;
