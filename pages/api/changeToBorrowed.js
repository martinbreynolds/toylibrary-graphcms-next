import { GraphQLClient } from 'graphql-request'

export default async ({ body}, res) => {
    const url = process.env.ENDPOINT
    const graphcms = new GraphQLClient(url, {
        headers: { "Authorization" : process.env.GRAPH_CMS_TOKEN}
    })

    await graphcms.request(
        `
        mutation($slug: String!) {
          updateToy(where: 
            { slug: $slug}, 
            data: { borrowed: true}
          ) {
            id,
            name,
            borrowed
          }
        }
        `,
        { slug: body.slug }
    )

    await graphcms.request(
        `mutation publishToy($slug: String) {
        publishToy(where: { slug: $slug}, to: PUBLISHED) {
            slug
            }
        }`,
        { slug: body.slug }
    )

    res.status(201).json({ slug: body.slug })
}
