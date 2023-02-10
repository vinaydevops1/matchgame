import './index.css'

const ThumbnailItem = props => {
  const {onClickMatch, eachItem} = props
  const {thumbnailUrl, id} = eachItem
  const onClickThumbnail = () => {
    onClickMatch(id)
  }
  return (
    <li className="thumbnail-list">
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-button"
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img-size"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
