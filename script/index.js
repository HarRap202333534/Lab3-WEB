async function getPublicationsAsync() {
    const response = await fetch('http://localhost:3000/publications');
    const json = await response.json();
    return json;
}

async function loadPublications() {
    const publications = await getPublicationsAsync();
    const parent = document.getElementById('publications');
    const root = ReactDOM.createRoot(parent);

    publications.forEach(publication => {
        root.render(<BlogCard blogId={publication.id} title={publication.title} author={publication.author} date={publication.datePublication} />)
    })
}

loadPublications();


