import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { isError, isLoading, data } = useGetAllProductsQuery();
  if (isError) {
    return <h1> There was an Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllProducts;
