import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ParticlesPortion
} from "./ListGrid/"

import markdown from "./img/level4/markdown-guide.png"
import sitelogo from "./img/level4/sitelogo.png"
import preactbp from "./img/level4/preactbp.png"

export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 4 : Open Source Projects</HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemImage>{preactbp}</ListItemImage>
        <ListItemText small={true}>Preact BoilerPlate</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{preactbp}</ListItemImage>
        <ListItemText small={true}>React BoilerPlate</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{markdown}</ListItemImage>
        <ListItemText small={true}>Markdown Guide</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{sitelogo}</ListItemImage>
        <ListItemText small={true}>This Website</ListItemText>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
