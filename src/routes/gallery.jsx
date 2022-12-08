import React from 'react'
import { useQuery, gql } from '@apollo/client';
import '../pluginCss/imagehover.min.css'
const GET_POSTS = gql`
  query NewQuery {
          posts {
            nodes {
              content
              date
              title
              link
              featuredImage {
                node {
                  altText
                  link
                }
              }
            }
          }
        }
`;
function Gallery() {
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data)
    return (
        <div className='w-screen h-screen mt-[10rem]'>
            <div className='GalleryImages flex flex-wrap mx-[10rem]'>
                {data.posts.nodes.map((post)=>{
                return(
                        <figure class="imghvr-blur w-1/3 aspect-square overflow-hidden m-10">
                        <img alt='gal' className=' box-border p-20 w-full h-full object-cover' src={post.featuredImage.node.link} /> 
                            <figcaption>
                                {post.title}
                            </figcaption>
                        </figure>
                    
                )
                })}
            </div>
        </div>
    )
}

export default Gallery