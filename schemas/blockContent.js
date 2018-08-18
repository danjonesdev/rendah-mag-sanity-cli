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
      name: 'spotifyEmbedBlock',
      title: 'Spotify Embed',
      type: 'object',
      fields: [
        {
          name: 'spotifyEmbed',
          title: 'Spotify Embed URI',
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
          title: 'SoundCloud Embed (tracks/12345)',
          type: 'string',
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
          title: 'YouTube Embed (2g811Eo7K8U)',
          type: 'string',
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
          title: 'Facebook Video Embed (https://www.facebook.com/Bloc2BlocEnt/videos/453723538461181/)',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
}
