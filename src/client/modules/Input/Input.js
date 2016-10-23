import React, { Component, PropTypes } from 'react'
import { clone, omit } from 'lodash'

import Flexbox from 'react-material-flexbox'
import { Checkbox, Input, RadioGroup, RadioButton } from 'react-toolbox'

class Field extends Component {

	render () {
		const { type, label, name, options, onChange } = this.props
		let content

		if (type === 'input') {
			content = (<Input type={ name } label={ label } name={ name } />)
		} else if (type === 'checkboxGroup') {
			content = (
				<Flexbox>
					<h6>{ label }</h6>
					<Flexbox layout='row' flex='50'>
						{options.map(option => {
							return (
								<Flexbox layout='row' flex='50'>
									<Checkbox label={ option.label } />
								</Flexbox>
							)
						})}
					</Flexbox>
				</Flexbox>
			)
		} else if (type === 'radio') {
			<Flexbox>
				<h6>{ label }</h6>
				<RadioGroup name={ name }>
					{options.map(option => {
						return (<RadioButton label={ option.label } value={ option.value } />)
					})}
				</RadioGroup>
			</Flexbox>
		}

		return content 
	}
}


export default Field
