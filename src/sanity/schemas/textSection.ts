import { defineField, defineType } from 'sanity'

export const textSection = defineType({
  title: 'Text section',
  name: 'text_section',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'markdown',
      validation: Rule => Rule.required(),
    }),
  ],
})
