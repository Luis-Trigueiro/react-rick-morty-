import { Card } from "react-bootstrap";
import { useNavigate } from 'react-router';

import PropTypes from 'prop-types'

const EpisodeCard = ({ episodes }) => {

  const history = useNavigate()

  return (

    <Card.Link href="#">{episodes?.name}</Card.Link>

  )
}

EpisodeCard.propTypes = {
  episodes: PropTypes.object
}
export default EpisodeCard