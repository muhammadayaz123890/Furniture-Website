import { useState } from "react"
import Link from "next/link"





export default function SearchBar(){

    const [searchInput, setSearchInput] = useState('');

    const onSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const onSearchBtnClick = event => {

        let xhr = new XMLHttpRequest();

        xhr.open("GET", `http://127.0.0.1:8000/search/?que=${searchInput}`)

        xhr.onload = function(){
            console.log(xhr.response);
        }

        xhr.send();

    }

    return(
        <>
            <div className="row d-flex justify-content-center">
                
                <div className="col-lg-4 col-sm-8 d-flex justify-content-around  flex-row">
                    <input type="text" placeholder="Search Products" className="shop-input form-control" onChange={onSearchInputChange} value={searchInput} />
                    <Link href={`/search/${searchInput}`} className="button-secondary" onClick={onSearchBtnClick}>Search</Link>
                </div>
            </div>
        </>
    )
}


