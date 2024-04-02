import './index.css'

const TabItem = props => {
  const {each, onCLickFunction, isActive} = props
  const {tabId, displayText} = each
  const color = isActive ? 'select' : 'unselcet'
  const clickedOnItem = () => {
    onCLickFunction(tabId)
  }
  return (
    <li className="li-tab">
      <button className={`${color} btn`} onClick={clickedOnItem}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
