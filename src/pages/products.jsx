import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp.1.500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
    deleniti. Maxime, libero vitae. Officia aut consectetur, nulla, error
    voluptatum inventore, iure vel minus nisi ullam cumque. Aliquam, quam
    esse.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp.1.000.000",
    image: "/images/shoes-2.jpeg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
    deleniti. `,
  },
  {
    id: 2,
    name: "Sepatu Lalala",
    price: "Rp.2.000.000",
    image: "/images/shoes-3.jpeg",
    description: `ini merupakan sepatu lalala`,
  },
]

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {/* <h1>test</h1> */}
      
      {products.map((product) => (
        <CardProduct>
        <CardProduct.Header image={product.image}/>
        <CardProduct.Body name={product.name}>
          {product.description}
        </CardProduct.Body>
        <CardProduct.Footer price={product.price}/>
      </CardProduct>
      ))}
    </div>
  );
};
export default ProductsPage;
