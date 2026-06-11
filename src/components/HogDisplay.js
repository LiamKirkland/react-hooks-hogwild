import React, {useState} from "react";
import HogTile from "./HogTile";

function HogDisplay({hogs, filter}) {
  const [selectedHog, setSelectedHog] = useState(0)

  function selectHog(id) {
    setSelectedHog(id)
  }

  const hogsToDisplay = (filter.greased ? hogs.filter(hog => hog.greased) : hogs).sort((a, b) => {
    if(filter.sort == 'name') {
      return a.name.localeCompare(b.name)
    } else {
      return b.weight - a.weight
    }
  })

  console.log(hogsToDisplay)
  return (
  <div className="indexWrapper">
    {hogsToDisplay.map(hog => {
      return <HogTile key={hog.id} hog={hog} selected={hog.id == selectedHog ? true : false} onSelectHog={selectHog} /> 
    })}
  </div>)
}

export default HogDisplay