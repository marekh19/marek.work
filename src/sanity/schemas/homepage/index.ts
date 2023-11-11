import { defineField, defineType } from 'sanity'

export const homepage = defineType({
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Intro',
      name: 'intro',
      type: 'introduction',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{ type: 'bio_item' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [{ type: 'text_section' }],
      validation: Rule => Rule.required(),
    }),
  ],
})
