export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [{
            name: 'title',
            description: 'Enter the title of the NFT Drop',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'nftCollectionName',
            title: 'Name of NFT Collection',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'creator',
            title: 'Creator',
            type: 'reference',
            to: { type: 'creator' },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'prevewImage',
            title: 'Preview image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}