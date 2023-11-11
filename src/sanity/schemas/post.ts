import { defineField, defineType } from 'sanity'

export const post = defineType({
  title: 'Posts',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Summary',
      name: 'summary',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'markdown',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],
})
