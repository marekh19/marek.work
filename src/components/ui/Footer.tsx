import type { FC } from 'react'

export const Footer: FC = () => (
  <footer className="mt-16 p-6">
    <div className="text-center text-sm text-text/60">
      &copy; {new Date().getFullYear()} Marek Honzal. All Rights Reserved.
    </div>
  </footer>
)
