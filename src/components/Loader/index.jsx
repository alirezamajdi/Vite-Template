import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

export default function Loader({ size = 30 }) {
	return (
		<div className='flex w-full py-3'>
			<Icon icon='eos-icons:bubble-loading' width={size} className='m-auto text-primary' />
		</div>
	)
}

Loader.propTypes = {
	size: PropTypes.string,
}
