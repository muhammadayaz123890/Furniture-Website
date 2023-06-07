import Navbar from "../components/navbar";


export const getStaticProps = async () => {

    const response = await fetch(`http://127.0.0.1:8000/`)

}



export default function SearchProducts(){


    return (
        <>
            <section className="search-section">
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
        </>
    )
}