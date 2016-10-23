import React from 'react'
import classnames from 'classnames'

// Thirdparty
import { Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from '../ProfileEditor.scss'

const SocialMedia = (props) => (
  <Flexbox className={ classnames(theme.group, theme.social) } flex='70' layout='row' align='center center'>
    <Flexbox layout='column' flex>
      <h5>Links to your social media pages</h5>
      <p>Sharing social media pages can help Oh-hi members get to know each other a bit before reaching out. They can be a great way to find conversation topics for those first time meetings. Feel free to include only the pages you’re comfortable sharing, or none at all.</p>
      <br/>
      <p className={ theme.notice }>Oh-hi won’t post anything to your accounts or pull any information from them.</p>
      <Input type='text' label='Facebook' name='facebook' />
      <Input type='text' label='Twitter' name='twitter' />
      <Input type='text' label='Instagram' name='instagram' />
      <Input type='text' label='Pinterest' name='pinterest' />
    </Flexbox>
  </Flexbox>
)

export default SocialMedia