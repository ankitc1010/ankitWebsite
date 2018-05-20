import { h, Component } from "preact"
import Header from "./Header"
import Dialog from "./Dialog"
import { List, ListTab } from "./List"
import dp from "./img/dp.jpeg"
import phone from "./img/phone.png"
import gmail from "./img/gmail.png"
import address from "./img/address.png"
import react from "./img/react.png"
import html from "./img/html.png"
import "./styles.scss"
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dialog>
          <Dialog.Image>{dp}</Dialog.Image>
          <Dialog.Text>Will love to have a chat</Dialog.Text>
        </Dialog>
        <List>
          <ListTab>
            <ListTab.Image>{phone}</ListTab.Image>
            <ListTab.Title>8105630497</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>{gmail}</ListTab.Image>
            <ListTab.Title>ankit.c1010@gmail.com</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>{address}</ListTab.Image>
            <ListTab.Title>Bangalore, India</ListTab.Title>
          </ListTab>
        </List>
        <Dialog>
          <Dialog.Image>{dp}</Dialog.Image>
          <Dialog.Text>I have worked on the following tech</Dialog.Text>
        </Dialog>
        <List>
          <ListTab>
            <ListTab.Image>{react}</ListTab.Image>
            <ListTab.Title>React.js</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://res.cloudinary.com/hashnode/image/upload/v1457865805/st9hz4f5ufmpxhizmfpk.jpg
            </ListTab.Image>
            <ListTab.Title>Webpack</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://pbs.twimg.com/profile_images/702185727262482432/n1JRsFeB_400x400.png
            </ListTab.Image>
            <ListTab.Title>Node.js</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://www.gadgetdaily.xyz/wp-content/uploads/2015/07/JSlogo.png
            </ListTab.Image>
            <ListTab.Title>Javascript</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>
              https://avatars2.githubusercontent.com/u/317889?s=200&v=4
            </ListTab.Image>
            <ListTab.Title>Sass</ListTab.Title>
          </ListTab>
          <ListTab>
            <ListTab.Image>{html}</ListTab.Image>
            <ListTab.Title>HTML5</ListTab.Title>
          </ListTab>
        </List>
      </div>
    )
  }
}

export default Home
