import  Card  from "react-bootstrap/Card"
import Tags from "./Tags"


const MisCartas = ({Nombre, Imagen, Descripcion, Color, Texto}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Imagen} />
      <Card.Body>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>{Descripcion} </Card.Text>
        <Tags Color={Color} Texto={Texto}/>
      </Card.Body>
    </Card>
    </>
  )
}

export default MisCartas