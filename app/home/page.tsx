import Link from 'next/link';

const restaurants = [
  { id: '1', name: 'Restaurant 1' },
  { id: '2', name: 'Restaurant 2' },
  { id: '3', name: 'Restaurant 3' },
];

export default function Home() {
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link href={`/restaurants/${restaurant.id}`}>
              <p>{restaurant.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}