import type { FC } from 'react'

export const Footer: FC = () => (
  <footer className="mt-24 px-4 py-6 sm:px-6">
    <div className="text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Marek Honzal. All Rights Reserved.
    </div>
  </footer>
)
