export default function Crest({ size = 96 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 4 L112 22 V64 C112 96 90 120 60 136 C30 120 8 96 8 64 V22 Z"
        fill="#1C2016"
        stroke="#9C8748"
        strokeWidth="2.5"
      />
      <path
        d="M60 14 L104 29 V64 C104 91 85 111 60 125 C35 111 16 91 16 64 V29 Z"
        fill="none"
        stroke="#3A3F2E"
        strokeWidth="1"
      />
      {/* Compass star motif — original, not a service seal */}
      <g stroke="#E9E4D4" strokeWidth="1.5" strokeLinecap="round">
        <line x1="60" y1="34" x2="60" y2="96" />
        <line x1="30" y1="65" x2="90" y2="65" />
        <line x1="41" y1="45" x2="79" y2="85" />
        <line x1="79" y1="45" x2="41" y2="85" />
      </g>
      <circle cx="60" cy="65" r="9" fill="#6E2A2A" stroke="#E9E4D4" strokeWidth="1.5" />
      <path
        d="M52 100 L60 116 L68 100"
        fill="none"
        stroke="#9C8748"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
