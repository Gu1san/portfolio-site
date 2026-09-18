'use client';

import { useEffect, useState } from 'react';

const technologies = ['React', 'Next.js', 'Node.js', 'C#', 'Unity'];

export default function AboutTerminal() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const currentWord = technologies[index];

    if (waiting) {
      const timeout = setTimeout(() => {
        setWaiting(false);
        setDeleting(true);
      }, 1500);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const nextText = currentWord.slice(0, text.length + 1);

          setText(nextText);

          if (nextText === currentWord) {
            setWaiting(true);
          }
        } else {
          const nextText = currentWord.slice(0, text.length - 1);

          setText(nextText);

          if (nextText === '') {
            setDeleting(false);
            setIndex((current) => (current + 1) % technologies.length);
          }
        }
      },
      deleting ? 70 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, waiting, index]);

  return (
    <div className="animate-float w-full max-w-md overflow-hidden rounded-xl border border-foreground/20 bg-background shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-3 font-mono text-xs text-foreground/50">
          ~/guilherme
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm leading-7">
        <p className="text-foreground/50">$ whoami</p>

        <p className="mb-4">Guilherme</p>

        <p className="text-foreground/50">$ role</p>

        <p className="mb-4">Full Stack Developer</p>

        <p className="text-foreground/50">$ currently_learning</p>

        <p className="text-brand">
          {text}
          <span className="ml-0.5 inline-block animate-pulse">█</span>
        </p>
      </div>
    </div>
  );
}
