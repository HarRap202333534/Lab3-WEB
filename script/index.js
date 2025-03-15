function App() {
    return <>
        <Header />
        <BlogList />
        <Footer />
    </>
}

const element = document.querySelector("#root")
const root = ReactDOM.createRoot(element)
root.render(<App />)


