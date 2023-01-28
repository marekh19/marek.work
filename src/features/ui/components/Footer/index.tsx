import type { FC } from 'react'

export const Footer: FC = () => (
  <footer className="px-4 sm:px-6 py-6 mt-24">
    <div className="text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Marek Honzal. All Rights Reserved.
    </div>
  </footer>
)
