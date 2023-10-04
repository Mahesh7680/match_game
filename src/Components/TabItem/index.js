import './index.css'

const TabItem = props => {
  const {eachTabItem, onClickTabItem, selectTabButton} = props
  const {displayText, tabId} = eachTabItem

  const onClickedTab = () => {
    onClickTabItem(tabId)
  }

  const buttonHileghter = selectTabButton ? 'button-hileghter' : ''

  return (
    <li>
      <button onClick={onClickedTab} type="button" className={buttonHileghter}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
