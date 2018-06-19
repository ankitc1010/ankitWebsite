import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ParticlesPortion
} from "./ListGrid/"

import react from "./img/level1/react.png"
import guitar from "./img/level3/guitar.png"

import js from "./img/level1/js.png"
import trekking from "./img/level3/trekking.png"


export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 3 : Things I like to do.</HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemImage>{react}</ListItemImage>
        <ListItemText>Coding</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{js}</ListItemImage>
        <ListItemText small={true}>Open Source Contribution</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{guitar}</ListItemImage>
        <ListItemText small={true}>Playing Guitar</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{trekking}</ListItemImage>
        <ListItemText small={true}>Trekking</ListItemText>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
