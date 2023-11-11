import { defineField, defineType } from 'sanity'

export const link = defineType({
  title: 'Links',
  name: 'link',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
  ],
})
