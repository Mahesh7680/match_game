import './index.css'

const AppItem = props => {
  const {eachItem, onClickImageElement} = props
  const {id, imageUrl, thumbnail} = eachItem

  const onSelectImage = () => {
    onClickImageElement(id)
  }

  return (
    <li className="app-logo-container">
      <button type="button">
        <img
          className="image-element"
          src={imageUrl}
          alt={thumbnail}
          onClick={onSelectImage}
        />
      </button>
    </li>
  )
}

export default AppItem
