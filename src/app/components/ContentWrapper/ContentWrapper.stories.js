import React from 'react'
import ContentWrapperComponent from './ContentWrapper.template'

const metadata = {
  title: 'components/Wrappers/ContentWrapper',
  component: ContentWrapperComponent
}

export default metadata

export const ContentWrapper = (args) => <ContentWrapperComponent {...args} />

ContentWrapper.args = {}
