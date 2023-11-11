import { defineField, defineType } from 'sanity'

export const bioItem = defineType({
  title: 'Bio Item',
  name: 'bio_item',
  type: 'object',
  fields: [
    defineField({
      title: 'Year',
      name: 'year',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
})
