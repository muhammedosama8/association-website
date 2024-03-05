import { Button, Col, Modal, Row } from "react-bootstrap";

const Offer = ({
  addModal,
  setAddModal,
  image,
}) => {
  return (
    <Modal
      className="fade"
      style={{ textAlign: "right" }}
      show={addModal}
      onHide={() => {
        setAddModal();
      }}
    >
        <Modal.Header>
          <Modal.Title>
            العرض
          </Modal.Title>
          <Button className="close" style={{ left: "0" }}
            onClick={() => setAddModal()} >
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12}>
                <img src={image} alt='image' className='w-100' /> 
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={setAddModal} variant="primary light">
            تم
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Offer;
