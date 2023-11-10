import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { markdownSchema } from 'sanity-plugin-markdown'
import { deskTool } from 'sanity/desk'

import { env } from '@/env.mjs'
import { schemas } from '@/sanity/schemas'

import { Logo } from '@/components/studio/Logo'

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION

const config = defineConfig({
  projectId,
  dataset,
  title: 'marek.work studio',
  apiVersion,
  basePath: '/studio',
  plugins: [deskTool(), visionTool(), colorInput(), markdownSchema()],
  studio: {
    components: {
      logo: Logo,
    },
  },
  schema: { types: schemas },
})

export default config
