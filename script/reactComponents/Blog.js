function Blog({id}) {
    return <>
        <BlogDetails id={id} />
        <AddComment id={id} />
        <CommentList id={id} />
    </>
}