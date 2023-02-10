import './index.css'

const TabItem = props => {
  const {eachItem, onClickCategory, isActive} = props
  const {tabId, displayText} = eachItem
  const onClickSelect = () => {
    onClickCategory(tabId)
  }
  const addColor = isActive ? 'add-color' : null

  return (
    <li className="tab-list">
      <button
        type="button"
        onClick={onClickSelect}
        className={`button-style ${addColor}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
