import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { cn } from '@/lib/utils'

type Props = {
  content?: string | null
  className?: string
}

export const Markdown: FC<Props> = ({ content, className }) => {
  if (!content) return null

  return (
    <div className={cn('w-full', className)}>
      <ReactMarkdown
        className="prose-accent-bullet prose min-w-full text-text dark:prose-invert prose-a:text-primary prose-a:no-underline prose-a:transition-colors prose-a:duration-300 prose-a:ease-in-out hover:prose-a:text-primary/80"
        components={{
          a({ node, children, ...props }) {
            try {
              new URL(props.href ?? '')
              // If we don't get an error, then it's an absolute URL.

              props.target = '_blank'
              props.rel = 'noopener noreferrer'
            } catch (e) {
              console.error(e)
            }

            return <a {...props}>{children}</a>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
