import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { error, isLoading, data }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>BigggggggggggError</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis commodi similique assumenda provident? Porro nihil dicta sunt sequi rerum, dolore nostrum neque assumenda quia numquam in, temporibus quae pariatur.",
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.log(`There was an error: ${err.message}`);
    }
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Add New Product</button>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

export default AddNewProduct;
