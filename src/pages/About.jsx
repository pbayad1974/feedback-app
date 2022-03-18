import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function About() {
  return (
    <Card>Hello, this is about page
        <br />
        <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default About