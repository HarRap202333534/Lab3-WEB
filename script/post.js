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

function App() {
    const id = queryParameters();

    return <>
        <Header />
        <Blog id={id} />
        <Footer />
    </>
}

const element = document.querySelector("#root");
const root = ReactDOM.createRoot(element);
root.render(<App />);


