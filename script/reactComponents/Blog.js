function Blog({id}) {
    return <>
        <IdContext.Provider value={id}>
            <BlogDetails />
            <AddComment />
            <CommentList />
        </IdContext.Provider>
    </>
}