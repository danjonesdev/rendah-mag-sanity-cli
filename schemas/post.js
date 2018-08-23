export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: Rule => Rule.required().max(60)
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Article Description',
      type: 'text',
      validation: Rule => Rule.required().min(50).max(300)
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}]
    // },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Article Body',
      type: 'blockContent'
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
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
