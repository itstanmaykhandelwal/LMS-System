import request, { gql } from "graphql-request";
const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/" + process.env.NEXT_PUBLIC_HYGRAPH_KEY + "/master"
// https://api-ap-south-1.hygraph.com/v2/clrmefp6r0kxa01w3w7kpikp7/master
export const getCourseList = async () => {
    const query = gql`
    query CourseList {
        courseLists {
          banner {
            url
          }
          free
          id
          totalChapters
          tags
          name
          author
        }
      }
         
    `
    const result = await request(MASTER_URL, query);
    return result;
}

export const getCourseById = async (id) => {
    const query = gql`
    query Course {
        courseList(where: {id: "`+id+`"}) {
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          description
          id
          name
          free
          totalChapters
          youtubeUrl
        }
      }
      
      
      `
    const result = await request(MASTER_URL, query);
    return result;
}