function BlogList() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:3000/publications');

                if(!response.ok){
                    throw new Error('Erreur de chargenement des publications');
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

    return <>
        <div className="container mb-4 mt-4">
            <form className="row" id="search">
                <div className="col-12 col-md-6 order-1 mt-3 mb-3">
                    <div className="input-group">
                        <button className="btn" id="searchButton" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                        <input id="searchBar" type="text" className="form-control" placeholder="Rechercher" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="col-12 col-md-6 order-2 select_label">
                    <label className="mt-3 mb-3 col-6" id="selectLabel" htmlFor="sort">Trier par :</label>
                    <div className="col-6">
                        <select id="sort" className="mb-3 form-select mt-3">
                            <option>Récent</option>
                            <option>Populaire</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <div className="container">
            <div id="publications" className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
                {loading && <h1>Chargement...</h1>}
                {data.map(data => <BlogCard key={data.id} component={data} />)}
                {error && <h1>{error}</h1>}
            </div>
        </div>
    </>
}