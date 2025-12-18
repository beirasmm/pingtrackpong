export function Logo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Paddle */}
      <ellipse cx="70" cy="100" rx="35" ry="45" fill="#f97316" />
      <ellipse cx="70" cy="100" rx="25" ry="35" fill="#ea580c" />
      <rect x="65" y="140" width="10" height="40" fill="#78350f" rx="2" />
      
      {/* Ball */}
      <circle cx="140" cy="80" r="20" fill="white" stroke="#f97316" strokeWidth="3" />
      <circle cx="140" cy="80" r="20" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />
      
      {/* Motion lines */}
      <line x1="115" y1="70" x2="100" y2="65" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="80" x2="95" y2="80" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
      <line x1="115" y1="90" x2="100" y2="95" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
