function svgDataUri(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function crearImagenProducto(icono, fondo, acento) {
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360">
      <rect width="600" height="360" fill="${fondo}"/>
      <circle cx="300" cy="180" r="126" fill="${acento}" opacity=".45"/>
      <circle cx="300" cy="180" r="96" fill="#fff8e7" opacity=".8"/>
      <text x="300" y="218" text-anchor="middle" font-size="118">${icono}</text>
    </svg>
  `)
}

export const imagenHero = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900">
    <defs>
      <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#e8c875"/>
        <stop offset="1" stop-color="#9eaa69"/>
      </linearGradient>
    </defs>
    <rect width="800" height="900" fill="url(#fondo)"/>
    <circle cx="155" cy="185" r="95" fill="#fff8e7" opacity=".18"/>
    <circle cx="670" cy="300" r="145" fill="#173f35" opacity=".12"/>
    <path d="M0 610Q180 540 390 635t410-10v275H0Z" fill="#173f35" opacity=".18"/>
    <rect x="90" y="560" width="620" height="240" rx="12" fill="#8e5634"/>
    <path d="M90 610h620M90 680h620M90 750h620M205 560v240M360 560v240M515 560v240" stroke="#633c29" stroke-width="13" opacity=".72"/>
    <text x="400" y="480" text-anchor="middle" font-size="230">🥑</text>
    <text x="230" y="560" text-anchor="middle" font-size="175">🍊</text>
    <text x="570" y="565" text-anchor="middle" font-size="170">🍐</text>
    <text x="340" y="650" text-anchor="middle" font-size="150">🍋</text>
    <text x="510" y="650" text-anchor="middle" font-size="145">🍎</text>
  </svg>
`)
