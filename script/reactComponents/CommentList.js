function CommentList({id}){
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:3000/comments?publicationId=' + id);

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

        setData( fetchData());       
    }, []);

    if (loading) {
        return <h1>Chargement...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return <>
        <div id="commentDiv" class="container">
            {data.map(data => <Comment contenu={data.contenu} />)}
        </div>
    </>
}