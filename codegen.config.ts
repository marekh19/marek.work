import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://gapi.storyblok.com/v1/api': {
        headers: {
          Token: process.env.STORYBLOK_GQL_TOKEN!,
        },
      },
    },
  ],
  documents: ['src/services/apollo/queries/**/*.gql'],
  generates: {
    'src/types/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
