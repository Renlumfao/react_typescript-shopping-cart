import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../componets/StoreItem"
import storeitems from "../data/item.json"

export function Store() {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeitems.map(item => (
            <Col key={item.id}><StoreItem {...item} /></Col>
        ))}
    </Row>
    </>
  )
}
