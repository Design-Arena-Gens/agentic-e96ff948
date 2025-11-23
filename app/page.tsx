"use client";

import { useMemo, useState } from 'react';

function buildUnsplashUrl(seed: number): string {
  // Use keyword mix to bias results toward the requested aesthetic
  const q = [
    'woman',
    'young',
    'short-hair',
    'auburn',
    'golden-hour',
    'urban-park',
    'trees',
    'soft-focus',
    'elegant',
    'modern',
    'white-shirt',
    'portrait'
  ].join(',');
  // source.unsplash.com provides a random but relevant image; add seed to avoid cache
  return `https://source.unsplash.com/1600x1000/?${q}&sig=${seed}`;
}

export default function HomePage() {
  const [seed, setSeed] = useState<number>(() => Math.floor(Math.random() * 1_000_000));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const imageUrl = useMemo(() => buildUnsplashUrl(seed), [seed]);

  return (
    <main className="page-root">
      <div className="container">
        <header className="header">
          <h1 className="title">Retrato dorado</h1>
          <p className="subtitle">
            Mujer joven de est?tica moderna y elegante, cabello corto casta?o rojizo con volumen
            natural. Mirada expresiva y rasgos delicados. Camiseta blanca con mangas. Escena al
            aire libre durante la golden hour: luz c?lida, ambiente sereno y profesional.
          </p>
        </header>

        <div className="image-wrap">
          <div className="warm-overlay" aria-hidden />
          <img
            key={imageUrl}
            src={imageUrl}
            alt="Retrato hiperrealista con luz c?lida en parque urbano"
            className={`photo ${isLoading ? 'photo--loading' : 'photo--ready'}`}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && <div className="skeleton" />}
        </div>

        <div className="controls">
          <button
            className="btn"
            onClick={() => {
              setIsLoading(true);
              setSeed((s) => (s + Math.floor(Math.random() * 9) + 1) % 10_000_000);
            }}
          >
            Generar otra
          </button>
          <a
            className="btn btn--ghost"
            href={imageUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir imagen original
          </a>
        </div>

        <section className="details">
          <h2 className="h2">Estilo fotogr?fico</h2>
          <ul className="bullets">
            <li>Hiperrealista con enfoque suave</li>
            <li>Luz dorada que envuelve el rostro</li>
            <li>Fondo de ?rboles difuminados (parque urbano)</li>
            <li>Personalidad: segura, creativa y sofisticada</li>
          </ul>
        </section>
      </div>
      <footer className="footer">? {new Date().getFullYear()} Retrato dorado</footer>
    </main>
  );
}
