export function MongoliaFlag() {
  return (
    <svg viewBox="0 0 30 20" className="h-4 w-6" aria-hidden="true">
      <rect width="10" height="20" fill="#DA2032" />
      <rect x="10" width="10" height="20" fill="#0066B3" />
      <rect x="20" width="10" height="20" fill="#DA2032" />
      <g fill="#F9CF02" transform="translate(15 3.2) scale(0.42)">
        <path d="M0-6.2c.6 1.2.4 2.2-.2 2.8.8-.2 1.6.4 1.6 1.2 0 .6-.4 1-1 1.2.8.4 1.2 1.2.8 2-.4.6-1.2.8-1.8.4V4.2h1.2v1.2H-.6V4.2H.6V1.4c-.6.4-1.4.2-1.8-.4-.4-.8 0-1.6.8-2-.6-.2-1-.6-1-1.2 0-.8.8-1.4 1.6-1.2-.6-.6-.8-1.6-.2-2.8z" />
        <circle cy="6.2" r="1.1" />
        <circle cy="8.6" r="1.1" />
      </g>
    </svg>
  );
}

export function UsFlag() {
  return (
    <svg viewBox="0 0 30 20" className="h-4 w-6" aria-hidden="true">
      <rect width="30" height="20" fill="#B22234" />
      {[1, 3, 5, 7, 9, 11].map((row) => (
        <rect key={row} y={(row * 20) / 13} width="30" height={20 / 13} fill="#fff" />
      ))}
      <rect width="12.6" height={(7 * 20) / 13} fill="#3C3B6E" />
      {[
        [1.4, 1.1],
        [3.5, 1.1],
        [5.6, 1.1],
        [7.7, 1.1],
        [9.8, 1.1],
        [2.45, 2.3],
        [4.55, 2.3],
        [6.65, 2.3],
        [8.75, 2.3],
        [1.4, 3.5],
        [3.5, 3.5],
        [5.6, 3.5],
        [7.7, 3.5],
        [9.8, 3.5],
        [2.45, 4.7],
        [4.55, 4.7],
        [6.65, 4.7],
        [8.75, 4.7],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.38" fill="#fff" />
      ))}
    </svg>
  );
}
