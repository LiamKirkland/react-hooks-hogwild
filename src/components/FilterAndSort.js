import React from "react"
import Filter from "./Filter"
import Sort from "./Sort"

function FilterAndSort({ onSetFilter, filterSettings, onRevealHidden }) {
  function setGreased(greased) {
    onSetFilter({...filterSettings, greased: greased})
  }
  function setSort(sort) {
    onSetFilter({...filterSettings, sort: sort})
  }

  return (
    <div id="filterBar">
      <Filter onSetGreased={setGreased} />
      <Sort onSetSort={setSort}/>
      <button className="sortBtn" onClick={onRevealHidden}>Reveal All</button>
    </div>
  )
}

export default FilterAndSort
