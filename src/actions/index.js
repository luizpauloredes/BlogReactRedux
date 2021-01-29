
const getPost = async () => {
    const response = await  fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}
console.log('getPost', getPost())


export function loadContactsSuccess(posts) {
    return { type: 'FETCH_POSTS', payload: posts.data }
}


export function loadPosts() {
    return function (dispatch) {

        return getPost().then(posts => {
            console.log("posts", posts)
            dispatch(loadContactsSuccess(posts))

        }).catch(error => {
            throw error;
        })
    }
}

