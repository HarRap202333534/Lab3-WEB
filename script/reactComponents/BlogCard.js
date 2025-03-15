function BlogCard({component}) {
    const {id, title, author, datePublication} = component

    function getLink(id) {
        return "post.html?id=" + id
    }
    
    return <>
        <div className="col">
            <a href={getLink(id)}>
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img src="../logo.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{author}</p>
                        <p className="card-text">Publié le : {datePublication}</p>
                    </div>
                </div>
            </a>
        </div>
    </>
}