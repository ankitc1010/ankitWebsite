import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ParticlesPortion
} from "./ListGrid/"

import nudglabs from './img/level2/nudglabs.svg'
import coyan from './img/level2/coyan.png'

import pb from './img/level2/pblogo.png'

import ruva from './img/level2/ruvalogo.png'
import h2o from './img/level2/h2oaqua.png'


export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 2 : Projects</HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemImage>{nudglabs}</ListItemImage>
        <ListItemText>NudgLabs</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{coyan}</ListItemImage>
        <ListItemText>Coyan</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{h2o}</ListItemImage>
        <ListItemText>H2O Aqua</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{ruva}</ListItemImage>
        <ListItemText small={true}>Ruva Foundation</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{pb}</ListItemImage>
        <ListItemText small={true}>Pebble Globe</ListItemText>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
