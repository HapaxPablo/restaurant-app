import { useRouter } from 'next/router';

const Restaurant = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Restaurant {id}</h1>
      <p>Description: Lorem ipsum</p>
      <p>Address: 123 Restaurant St</p>
      <img src="/restaurant.jpg" alt="Restaurant" />
    </div>
  );
};

export default Restaurant;