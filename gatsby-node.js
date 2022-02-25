// exports.createPages = async function ({ actions, graphql }) {
//     const { data } = await graphql(`
//         ArtistQuery {
//             allContentfulArtist {
//                 edges {
//                     node {
//                         id
//                         slug
//                     }
//                 }
//             }
//         } 
//     `)

//     data.allContentfulArtist.edges.forEach(edge => {
//         const slug = edge.node.slug
//         actions.createPage({
//             path: slug,
//             component: require.resolve('')
//         })
//     })
    
    
    
//     return graphql(`
//         artists: allContentfulArtist {
//             edges {
//                 node {
//                     slug
//                 }
//             }
//         }
//     `).then(result => {
//         result.data.artists.edges.forEach(({ node }) => {
//             createPage({
//                 path: `/${node.slug}`,
//                 component: path.resolve(`./src/pages/templates/artist.jsx`),
//                 context: {
//                     slug: node.slug
//                 }
//             })
//         })
//     })
// }