import { defineField, defineType } from 'sanity'

const project = defineType({
  title: 'Projects',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'name' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Year',
      name: 'year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Work in progress',
      name: 'work_in_progress',
      type: 'boolean',
      initialValue: false,
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
      title: 'Stack',
      name: 'stack',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'stack' }] }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Github URL',
      name: 'github_url',
      type: 'link',
    }),
    defineField({
      title: 'Website URL',
      name: 'website_url',
      type: 'link',
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
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})

export default project
