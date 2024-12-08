// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <ul className={`${className} card-item`}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-description"> {description} </p>
      <div className="img-conntainer">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </ul>
  )
}

export default CardItem
