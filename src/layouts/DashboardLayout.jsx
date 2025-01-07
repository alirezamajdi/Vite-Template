import PropTypes from 'prop-types'

import MainLayout from './MainLayout'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

export default function DashboardLayout({ children, title }) {
	return (
		<MainLayout title={title}>
			<Header />
			<div className='flex grow flex-col'>{children}</div>
			<Footer />
		</MainLayout>
	)
}

DashboardLayout.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
}
