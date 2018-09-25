export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  validation: Rule => Rule.required(),
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        annotations: []
      }
    },
    {
      type: 'image',
      options: {hotspot: true},
      validation: Rule => Rule.required()
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'reference',
    //   to: {type: 'category'}
    // },
    {
      name: 'subtitleBlock',
      title: 'Subtitle',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'quoteBlock',
      title: 'Quote',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          description: 'A quote by the subject that stands out',
          validation: Rule => Rule.required()
        },
        {
          name: 'source',
          title: 'Source',
          type: 'string',
          description: 'The source or subject',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'linkBlock',
      title: 'Link',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'spotifyEmbedBlock',
      title: 'Spotify Embed',
      type: 'object',
      fields: [
        {
          name: 'spotifyEmbed',
          title: 'Spotify Embed URI',
          description: 'For example: spotify:track:5GZ4znceWfpTLrBBpr83DW',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'soundCloudEmbedBlock',
      title: 'SoundCloud Embed',
      type: 'object',
      fields: [
        {
          name: 'soundCloudEmbed',
          title: 'SoundCloud Embed',
          type: 'string',
          description: 'For example: tracks/12345',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'youTubeEmbedBlock',
      title: 'YouTube Embed',
      type: 'object',
      fields: [
        {
          name: 'youTubeEmbed',
          title: 'YouTube Embed',
          type: 'string',
          description: 'For example: 2g811Eo7K8U',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'facebookVideoEmbedBlock',
      title: 'Facebook Video Embed',
      type: 'object',
      fields: [
        {
          name: 'facebookVideoEmbed',
          title: 'Facebook Video Embed',
          type: 'string',
          description: 'For example: https://www.facebook.com/Bloc2BlocEnt/videos/453723538461181/',
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
}
