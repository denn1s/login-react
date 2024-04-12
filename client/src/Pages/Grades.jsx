import useNavigate from "../useNavigate"

const Grades  = () => {
  const { navigate } = useNavigate()
  return (
    <div>
      <a onClick={() => navigate('/')}>GO TO HOME</a>
      Grades
    </div>
  )
}

export default Grades

