import { useRouter } from "next/dist/client/router";
import SearchBar from "../components/searchBar";



export default function SearchProducts(){
    

    return(
        <>

            <SearchBar />

            <section className="filtered-products-section">
                <div className="container">
                    <div className="row">
                        
                    </div>
                </div>
            </section>
        </>
    )
}