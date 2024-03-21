import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import instance from '~/apis';
import { TProduct } from '~/types/Product';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<TProduct | null>(null);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await instance.get(`/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [])
    return (
        <div>
            <h1>Chi tiet san pham</h1>
            <div>
                <h2>{product?.title}</h2>
                <p>Gia: {product?.price}</p>
                <p>{product?.description}</p>
                <img src={product?.thumbnail} alt={product?.title} />
            </div>
        </div>
    )

}

export default ProductDetail