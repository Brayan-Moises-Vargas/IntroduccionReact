import { Badge } from "react-bootstrap";

const Tags = ({Color, Texto}) => {
    return(
        <>
        <Badge bg={Color}>{Texto}</Badge>
        </>
    )
}
export default Tags