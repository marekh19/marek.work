'use client'

import { type FC } from 'react'
import { NextStudio } from 'next-sanity/studio'

import config from '../../../sanity.config'

export const Studio: FC = () => {
  return <NextStudio config={config} />
}
