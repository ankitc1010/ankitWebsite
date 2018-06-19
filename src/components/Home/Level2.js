import { h, Component } from "preact"
import HeadingTitle from "./HeadingTitle/"
import {
  ListItemBlock,
  ListItemImage,
  ListItemText,
  ListItemContainer,
  ListItemLink
} from "./ListGrid/"

import nudglabs from './img/level2/nudglabs.svg'
import coyan from './img/level2/coyan.png'

import pb from './img/level2/pblogo.png'

import ruva from './img/level2/ruvalogo.png'
import h2o from './img/level2/h2oaqua.png'


export default ({ padding, row }) => (
  <div style={{ paddingTop: padding ? "100px" : 0 }}>
    <HeadingTitle>Level 2 : The organizations that I have contributed to. </HeadingTitle>
    <ListItemContainer row={row}>
      <ListItemBlock>
        <ListItemLink link='http://www.wyze.ai'>
        <ListItemImage>{nudglabs}</ListItemImage>
        <ListItemText>NudgLabs</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{coyan}</ListItemImage>
        <ListItemText>Coyan</ListItemText>
      </ListItemBlock>
      <ListItemBlock>
      <ListItemLink link='https://www.h2oaqua.in'>
        <ListItemImage>{h2o}</ListItemImage>
        <ListItemText>H2O Aqua</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemLink link='http://www.ruvafoundation.com/'>
        <ListItemImage>{ruva}</ListItemImage>
        <ListItemText small={true}>Ruva Foundation</ListItemText>
        </ListItemLink>
      </ListItemBlock>
      <ListItemBlock>
        <ListItemImage>{pb}</ListItemImage>
        <ListItemText small={true}>Pebble Globe</ListItemText>
      </ListItemBlock>
    </ListItemContainer>
  </div>
)
