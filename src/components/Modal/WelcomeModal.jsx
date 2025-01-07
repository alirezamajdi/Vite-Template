import PropTypes from 'prop-types'
// import { useTranslation } from 'next-i18next';

import Modal from '.'

export default function WelcomeModal({ open, handleClose }) {
	// const { t } = useTranslation('components.modal.welcome');

	return (
		<Modal open={open} handleClose={handleClose}>
			{/* <h3 className='py-10 text-xl font-bold'>{t('title')}</h3> */}
			<div className='flex flex-col items-center gap-5 text-center'>
				<h2 className='text-2xl font-bold'>Welcome</h2>
				<h3 className='text-xl font-bold text-secondary'>Gaply frontned boilerplate modal</h3>
			</div>
		</Modal>
	)
}

WelcomeModal.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
}
