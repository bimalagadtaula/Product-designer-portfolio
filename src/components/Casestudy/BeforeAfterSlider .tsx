// components/before-after.jsx
export function BeforeAfterSlider({ beforeImage, afterImage, label, caption, className }) {
  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <div className="relative aspect-video">
        {/* Before Image */}
        <img 
          src={beforeImage} 
          alt={`Before: ${label}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* After Image (right side by default) */}
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <img 
            src={afterImage} 
            alt={`After: ${label}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Slider Handle */}
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white cursor-ew-resize z-10 shadow-lg">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm">
        After
      </div>
      
      {/* Caption */}
      <div className="mt-4">
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground text-sm">{caption}</p>
      </div>
    </div>
  );
}