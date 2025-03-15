function BlogDetails({id}) {
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:3000/publications/' + id);

                if(!response.ok){
                    throw new Error('Erreur de chargenement du contenu.');
                }

                const result = await response.json();
                setData(result);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        setData(fetchData());       
    }, []);

    if (loading) {
        return <h1>Chargement...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return <>
        <div id='top-body-part' class='container' dangerouslySetInnerHTML={{ __html: '<img src="../logo.png" alt="logo" height="200px" width="100%" /><h1 className="h-blog mb-5 mt-4">' + data.title + '</h1>' + data.contenu }}></div>
    </>
}