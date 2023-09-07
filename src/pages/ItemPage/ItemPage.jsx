export default function ItemPage(){
    return(
        <>
          <Row>
            <Col md={5}>
              <Image
                src={item.image}
                alt={item.name}
                className={styles.picture}
                fluid
              />
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
                    <Button
                      onClick={handleAddToCart}
                      className="btn-block"
                      type="button"
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className="btn-block" type="button">
                      Add To Wishlist
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
