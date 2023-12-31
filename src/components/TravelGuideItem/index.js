import './index.css'

const TravelGuideItem = props => {
  const {eachTravelList} = props
  const {name, description, imageUrl} = eachTravelList

  return (
    <li className="item-bg-container">
      <img className="image-small" src={imageUrl} alt={name} />
      <h1 className="name-paragraph">{name}</h1>
      <p className="description-paragraph">{description}</p>
    </li>
  )
}

export default TravelGuideItem
