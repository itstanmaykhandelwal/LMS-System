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

export const getCourseById = async (id,userEmail) => {
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
        userEnrollCourses(where: {courseId: "`+id+`", userEmail: "`+userEmail+`"}) {
            courseId
            userEmail
            completeChapter
          }
      }
      
      
      `
    const result = await request(MASTER_URL, query);
    return result;
}

export const EnrollCourse=async(courseId,userEmail)=>{
    const mutationQuery=gql`
    mutation EnrollCourse {
        createUserEnrollCourse(data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`"}) {
          id
        }
      }    

    `
    const result = await request(MASTER_URL, mutationQuery);
    return result;
}

export const PublishCourse = async(id) =>{
    const mutationQuery = gql`
    mutation EnrollCourse {
        publishUserEnrollCourse(where: {id: "`+id+`"}) {
            id
          }
      }
      
    `
    const result = await request(MASTER_URL, mutationQuery);
    return result;
}