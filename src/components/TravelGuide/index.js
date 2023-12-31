import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelGuideItem from '../TravelGuideItem'

import './index.css'

class TravelGuide extends Component {
  state = {
    isLoading: true,
    travelList: [],
  }

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))

    this.setState({travelList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, travelList} = this.state
    return (
      <div className="bg-container">
        <h1 className="travel-heading">Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="bottom-container">
          {isLoading ? (
            <div data-testid="loader" className="loader-container">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="travel-list">
              {travelList.map(eachTravelList => (
                <TravelGuideItem
                  key={eachTravelList.id}
                  eachTravelList={eachTravelList}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
