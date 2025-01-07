import PropTypes from 'prop-types'

export default function Card({ children, className }) {
	return <div className={`rounded-xl p-6 shadow-box ${className}`}>{children}</div>
}

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}
