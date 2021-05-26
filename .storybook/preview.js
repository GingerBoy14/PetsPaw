import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../src/styles/theme'
require('../src/styles/index.less')

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: 'app',
		values: [
			{
				name: 'app',
				value: theme.color.background,
			}
		],
	},
	controls: { expanded: true }
}

export const decorators = [
 (Story) => (
	 <ThemeProvider theme={theme}>
		 <Story/>
	 </ThemeProvider>
 )
]
