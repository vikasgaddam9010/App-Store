import './index.css'

const AppItem = props => {
  const {each} = props
  const {appId, appName, imageUrl, category} = each
  return (
    <li className="li-app-item">
      <img alt={appName} src={imageUrl} className="img-iocn" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
