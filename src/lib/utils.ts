import { clsx, type ClassValue } from 'clsx'
import { formatDistance } from 'date-fns'
import { twMerge } from 'tw-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeAgo(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  return formatDistance(date, now, { addSuffix: true })
}
