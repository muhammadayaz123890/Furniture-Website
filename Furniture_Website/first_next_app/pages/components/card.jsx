import Image from "next/image"
import Link from "next/link"

export default function Card(props){

    return(
        <>
            <Link className="product-item" href={`/productss/${props.id}`}>
                <img className='item-img' src={props.source} width='300' alt={props.alt_text}  height='300' />
                <h3 className="product-title">{props.name}</h3>
                <strong className="product-price">${props.price}</strong>
                <span className="icon-cross">
                  <Image src="/cross.svg" className='img-fluid'  width='20' height='20' />
                </span>
		      </Link>
        </>
    )
}
