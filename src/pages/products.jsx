import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {/* <h1>test</h1> */}
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"/>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
          deleniti. Maxime, libero vitae. Officia aut consectetur, nulla, error
          voluptatum inventore, iure vel minus nisi ullam cumque. Aliquam, quam
          esse.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1.500.000"/>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"/>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
          deleniti. Maxime, libero vitae. Officia aut consectetur, nulla, error
          voluptatum inventore, iure vel minus nisi ullam cumque. Aliquam, quam
          esse.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1.500.000"/>
      </CardProduct>
    </div>
  );
};
export default ProductsPage;
