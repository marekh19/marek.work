import type { FC } from 'react'

type ButtonProps = {
  text: string
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      className="mt-5 rounded bg-indigo-600 px-6 py-2.5 text-lg font-semibold text-gray-50 shadow-md transition duration-300 ease-in-out hover:bg-indigo-300 hover:text-gray-800 dark:bg-indigo-400 dark:text-gray-900 dark:hover:bg-indigo-600 dark:hover:text-gray-50"
    >
      {`${text} >`}
    </button>
  )
}
