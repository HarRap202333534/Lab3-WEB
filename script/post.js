function queryParameters() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
        return id;
    }
    else {
        return null;
    }
}

async function getComments(id = 0, publicationId = 0) {
    if(id == 0 && publicationId == 0){
        const response = await fetch('http://localhost:3000/comments');
        return response.json();
    }
    else if(publicationId != 0){
        const response = await fetch('http://localhost:3000/comments?publicationId=' + publicationId);    
        return response.json();
    }
    else{
        const response = await fetch('http://localhost:3000/comments/' + id);
        return response.json();
    }
    
}

async function loadComments(id) {
    const json = await getComments(0, id);
    const container = document.getElementById("commentDiv");
    json.forEach(comment => {
        container.insertAdjacentHTML('beforeend', `
            <div class='comment mb-4'>
                <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='currentColor' class='bi bi-person-square comment-svg' viewBox='0 0 16 16'>
                    <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0'/>
                    <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z'/>
                </svg>
                <p class='comment-content'>` + comment.contenu + `</p>
            </div>`);
    });
}


async function postComment() {
    const publicationId = queryParameters();
    const id = JSON.stringify((await getComments()).length + 1);
    console.log(id);
    const comment = document.forms["form-comment"]["commentaires"].value;
    let date = new Date();
    const now = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();

    if (id != null) {
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                "id": id,
                "publicationId": publicationId,
                "dateComment": now,
                "contenu": comment
            })
        });
        
    }
}

async function getPublicationAsync(id) {
    const response = await fetch('http://localhost:3000/publications/' + id);
    const json = await response.json();
    return json;
}

async function loadPublicationContent(id) {
    if(id != null) {
        const publications = await getPublicationAsync(id);
        const parent = document.getElementById("top-body-part");
        parent.insertAdjacentHTML('beforeend', `
        <img src="../logo.png" alt="logo" height="200px" width="100%">
        <h1 class="h-blog mb-5 mt-4">${publications.title}</h1>
        ${publications.contenu}`);
    }
}
loadPublicationContent(queryParameters());
loadComments(queryParameters());
