async function getPosts() {
    const response = await fetch('http://localhost:3000/publications');
    const json = await response.json();
    return json;
}

async function formatDate(date) {
    if (date < 10) {
        return "0" + date;
    }
    else {
        return date;
    }
}

async function createPost(contenu) {
    $('#dialog').dialog({
        modal: true,
        title: "Confirmation",
        open: function(){
            $(this).text("Voulez-vous vraiment publier ce post ?");
        },
        buttons: {
            "Oui": async function() {
                $(this).dialog("close");
                const id = JSON.stringify((await getPosts()).length + 1);
                let date = new Date();
                const now = date.getFullYear() + "-" + await formatDate(date.getMonth()) + "-" + await formatDate(date.getDay());
                const form = document.forms["postForm"];
                const title = form["title"].value;
                const author = form["author"].value;
                const content = contenu

                fetch('http://localhost:3000/publications', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify({
                            "id": id,
                            "title": title,
                            "author": author,
                            "datePublication": now,
                            "contenu": content
                        })
                });
                window.location.href = "index.html";
            },
            "Non": function() {
                $(this).dialog("close");
            }
        },
    }, "open");
}
