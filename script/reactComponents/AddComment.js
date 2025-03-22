function AddComment() {
    const id = React.useContext(IdContext);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [comment, setComment] = React.useState('');

    const postComment = async (publicationId, comment) => {
        const id = JSON.stringify(data.length + 1);
        let date = new Date();
        const now = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();

        const postData = async () => {
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

        await postData();
    }

    React.useEffect(() => {
        console.log("Fetching comments...");
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:3000/comments');

                if(!response.ok){
                    throw new Error('Erreur de chargenement des commentaires');
                }

                const result = await response.json();
                setData(result);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();       
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await postComment(id, comment);
            setComment('');
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <div className="container">
            <form id="form-comment" onSubmit={handleSubmit}>
                <label id="label-comment" className="mb-4" htmlFor="commentaires">Commentaires</label>
                <textarea className="mb-3" id="commentaires" name="commentaires" value={comment} onChange={(event) => setComment(event.target.value)} />
                <button id="button-comment" type="submit" className="btn btn-primary">Envoyer</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    </>
}