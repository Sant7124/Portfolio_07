import React from "react";

export function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-7.755 7.754a1.374 1.374 0 0 0 0 1.948l.066.066a1.374 1.374 0 0 0 1.945 0l7.756-7.754a1.374 1.374 0 0 0 0-1.948l-.066-.066A1.374 1.374 0 0 0 13.483 0zm-6.833 6.83a1.37 1.37 0 0 0-.964.407L.414 12.51a1.37 1.37 0 0 0 0 1.94l.066.067a1.37 1.37 0 0 0 1.943 0l5.27-5.27a1.37 1.37 0 0 0 0-1.94l-.066-.067a1.37 1.37 0 0 0-.977-.41zm6.91 5.923a1.372 1.372 0 0 0-.97.406l-2.478 2.478a1.372 1.372 0 0 0 0 1.94l.066.067a1.372 1.372 0 0 0 1.943 0l2.479-2.479a1.372 1.372 0 0 0 0-1.94l-.066-.067a1.372 1.372 0 0 0-.974-.405zm5.727-4.148a1.37 1.37 0 0 0-.964.407l-2.88 2.88a1.37 1.37 0 0 0 0 1.94l.066.068a1.37 1.37 0 0 0 1.944 0l2.879-2.88a1.37 1.37 0 0 0 0-1.94l-.066-.068a1.37 1.37 0 0 0-.979-.407zM18.84 13.14a1.37 1.37 0 0 0-.964.407l-4.226 4.226a1.37 1.37 0 0 0 0 1.94l.066.068a1.37 1.37 0 0 0 1.944 0l4.226-4.226a1.37 1.37 0 0 0 0-1.94l-.066-.068a1.37 1.37 0 0 0-.98-.407z" />
    </svg>
  );
}

export function HackerRankIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm5.2 16.8L12 19.6l-5.2-2.8V7.2L12 4.4l5.2 2.8v9.6z" />
    </svg>
  );
}

export function GeeksforGeeksIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5h-2v-2h2v2zm0-4h-2v-4h2v4zm4 4h-2v-6h2v6zm0-8h-2v-2h2v2z" />
    </svg>
  );
}

