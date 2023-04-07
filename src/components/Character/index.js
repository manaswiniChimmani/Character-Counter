import './index.css'

const Character = props => {
  const {details} = props
  const {character, count} = details

  return (
    <li>
      <p className="c1">
        {character} : {count}
      </p>
    </li>
  )
}
export default Character
