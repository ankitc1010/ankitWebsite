import { h, Component } from "preact"
const Container = ({ children }) => (
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-sm-12 col-xs-12">
        <ul class="list-contact">{children}</ul>
      </div>
    </div>
  </div>
)
const TabImage = ({ children }) => <img src={children} />
const TabDescription = ({ children }) => <span>{children}</span>
class ListTab extends Component {
  static Image = TabImage
  static Title = TabDescription
  render() {
    return <li>{this.props.children}</li>
  }
}
class List extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export { ListTab }
export { List }
