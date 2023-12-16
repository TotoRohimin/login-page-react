import CardProduct from "../Components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam molestias dolores officia est quod temporibus vitae quis eum voluptates vero, incidunt deleniti laboriosam sapiente hic corrupti et eius tempore.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
