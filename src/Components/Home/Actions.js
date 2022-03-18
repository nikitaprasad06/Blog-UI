
export const getAllBlogsDetails = (data) => ({
    type: 'ALL_BLOGS_DETAILS_REQUESTED', 
    data,
  })

export const setPageTitle = (data) => ({
  type: 'SET_PAGE_TITLE',
  data,
})