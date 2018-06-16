import { h, Component } from "preact"
const Container = ({ children }) => (
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="pad-contacts">
          <div class="flex">{children}</div>
        </div>
      </div>
    </div>
  </div>
)
const Image = ({ children }) => <img src={children} class="dp" />
const Text = ({ children }) => <span>{children}</span>
class Dialog extends Component {
  static Image = Image
  static Text = Text
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Dialog
