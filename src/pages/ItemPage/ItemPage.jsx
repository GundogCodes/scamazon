import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemPage({ getById }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    (async () => {
      setItem(await getById(id));
    })();
  }, [getById]);

  return (
    <>
      {item ? (
        <>
          <img src={item.image} alt="item image" />
          <h1>{item.name}</h1>
          <h1>{item.description}</h1>
          <h1>{item.category.name}</h1>
          <h1>{item.price}</h1>
          <h1>{item.rating}</h1>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
}
