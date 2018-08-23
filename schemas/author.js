export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'alias',
      title: 'Alias',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Author Description',
      type: 'text',
      validation: Rule => Rule.required().min(50).max(300)
    },
    {
      type: 'object',
      name: 'Socials',
      fieldsets: [
        {name: 'social', title: 'Social media handles'}
      ],
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'string',
          fieldset: 'social'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          fieldset: 'social'
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
          fieldset: 'social'
        },
        {
          name: 'soundcloud',
          title: 'SoundCloud',
          type: 'string',
          fieldset: 'social'
        },
        {
          name: 'website',
          title: 'Website',
          type: 'string',
          fieldset: 'social'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
