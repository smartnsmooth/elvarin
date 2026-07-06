export function EnterpriseDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="40" y="40" width="400" height="320" rx="16" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="80" y="80" width="120" height="72" rx="12" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="1.5" opacity="0.9" />
      <rect x="240" y="80" width="120" height="72" rx="12" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" opacity="0.9" />
      <rect x="160" y="200" width="160" height="80" rx="12" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" opacity="0.9" />
      <rect x="80" y="300" width="100" height="40" rx="8" fill="#EFF6FF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="200" y="300" width="100" height="40" rx="8" fill="#EFF6FF" stroke="#D1D5DB" strokeWidth="1" />
      <rect x="320" y="300" width="80" height="40" rx="8" fill="#EFF6FF" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="140" y1="152" x2="200" y2="200" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="300" y1="152" x2="280" y2="200" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="240" y1="280" x2="130" y2="300" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="240" y1="280" x2="250" y2="300" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="240" y1="280" x2="360" y2="300" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="140" cy="116" r="6" fill="#1E3A8A" />
      <circle cx="300" cy="116" r="6" fill="#2563EB" />
      <circle cx="240" cy="240" r="6" fill="#3B82F6" />
    </svg>
  );
}
