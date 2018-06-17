import { h, Component } from "preact"
import DeveloperHeader from "./DeveloperHeader/"
import HeadingTitle from "./HeadingTitle/"
import ListGrid from "./ListGrid/"
import "./styles.scss"
class Home extends Component {
  render() {
    return (
      <div>
        <DeveloperHeader />
        <HeadingTitle />
        <ListGrid />
      </div>
    )
  }
}

export default Home
