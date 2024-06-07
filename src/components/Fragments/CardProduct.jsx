const CardProduct = () => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
        <a href="#">
          <img
            src="/images/shoes-1.jpg"
            alt="product"
            className="p-8 rounded-t-lg"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">
              Sepatu Baru
            </h5>
            <p className="text-s text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              magni deleniti. Maxime, libero vitae. Officia aut consectetur,
              nulla, error voluptatum inventore, iure vel minus nisi ullam
              cumque. Aliquam, quam esse.
            </p>
          </a>
        </div>
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp.1.000.000</span>
            <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
      </div>
  );
};

const Body = () => {
    return (
        
    )
}
export default CardProduct;
