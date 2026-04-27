import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);
  if (isError) {
    <h1>There was an error</h1>;
  }

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  console.log(data);
  return <h1>{data.title}</h1>;
};

export default SpecificProduct;
