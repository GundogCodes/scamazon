import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../utilities/items-api.cjs';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Ratings from '../../components/Ratings/Ratings';

export default function ItemPage() {
  const { id } = useParams();
  console.log('id: ', id);
  const [item, setItem] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const newItem = await getById(id);
        setItem(newItem);
        console.log('new item:', item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {item ? (
        <>
          <Row>
            <Col md={5}>
              <Image src={item.image} alt={item.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h3>{item.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Ratings value={item.rating} />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
                <ListGroup.Item>{item.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${item.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className="btn-block" type="button">
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
}
