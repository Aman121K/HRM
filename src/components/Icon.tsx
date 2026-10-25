/** Small inline stroke icon set (no external assets). */
const paths = {
  layers: "M12 3 2.5 8 12 13l9.5-5L12 3Zm-9.5 9L12 17l9.5-5M2.5 16 12 21l9.5-5",
  users:
    "M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10 9v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.15a3.5 3.5 0 0 1 0 6.7",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2",
  calendar: "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-12ZM4 10h16M8.5 3v4m7-4v4M8 14h3",
  rupee: "M7 4h10M7 8.5h10M7 4h3.5a4.5 4.5 0 0 1 0 9H7l7.5 7",
  sparkle: "M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5m7 7L18 18M6 18l2.5-2.5m7-7L18 6",
  briefcase: "M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-10ZM9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M4 13h16",
  inbox: "M4 13.5 6.5 5h11l2.5 8.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5.5Zm0 0h4.5l1.5 2.5h4l1.5-2.5H20",
  phone: "M8 2.75h8A1.75 1.75 0 0 1 17.75 4.5v15A1.75 1.75 0 0 1 16 21.25H8a1.75 1.75 0 0 1-1.75-1.75v-15A1.75 1.75 0 0 1 8 2.75ZM11 18h2",
  shield: "M12 3 4.5 6v5.5c0 4.5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5 7.5-9.5V6L12 3Zm-3.5 9 2.5 2.5 4.5-5",
  key: "M14.5 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-1.3 3.2L20 19.5M17 16.5l2-2m-4.3-.6 1.8-1.8",
  building: "M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16m0-11h3a1 1 0 0 1 1 1v10M3 21h18M8.5 8h3m-3 4h3m-3 4h3",
  lock: "M6.5 10.5h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm2-.5V7a3.5 3.5 0 1 1 7 0v3M12 14.5v2.5",
  chain: "M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1",
  gauge: "M4.5 17a8.5 8.5 0 1 1 15 0M12 13l3.5-4.5M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  check: "m5 12.5 4.5 4.5L19 7.5",
  arrow: "M5 12h14m-5-5 5 5-5 5",
  file: "M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Zm0 0v4.5h4.5M9 13h6m-6 4h4",
  pin: "M12 21s7-5.6 7-11.5a7 7 0 1 0-14 0C5 15.4 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  bank: "M3 9.5 12 4l9 5.5M5 10v7m4.67-7v7m4.66-7v7M19 10v7M3.5 20h17",
  mail: "M4 6h16v12H4V6Zm0 0 8 6.5L20 6",
  star: "M12 2.5 14.6 9.4 21.5 12l-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6L12 2.5Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  wifi: "M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.75 16a4.75 4.75 0 0 1 6.5 0M12 19.5h.01",
  chart: "M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6",
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 22,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name]} />
    </svg>
  );
}
