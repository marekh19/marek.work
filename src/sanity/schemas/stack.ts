import { defineField, defineType } from 'sanity'

const stack = defineType({
  title: 'Stacks',
  name: 'stack',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'link',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      title: 'Background color',
      name: 'bg_color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
    }),
  ],
})

export default stack
