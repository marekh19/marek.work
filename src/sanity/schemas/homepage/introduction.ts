import { defineField, defineType } from 'sanity'

export const introduction = defineType({
  title: 'Introduction',
  name: 'introduction',
  type: 'object',
  fields: [
    defineField({
      title: 'Welcome quote',
      name: 'welcome_quote',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Full name',
      name: 'full_name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Job title',
      name: 'job_title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Profile picture',
      name: 'profile_picture',
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
