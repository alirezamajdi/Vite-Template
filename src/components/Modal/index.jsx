import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const overlayVariants = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			duration: 0.3,
			delayChildren: 0.4,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
			duration: 0.3,
			delay: 0.4,
		},
	},
}

export default function Modal({ open, handleClose, width, children }) {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={overlayVariants}
					className='fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center backdrop-blur-sm'
				>
					<motion.div
						initial='hidden'
						animate='visible'
						exit='hidden'
						variants={overlayVariants}
						className='bg-trasnparent absolute left-0 top-0 h-screen w-screen'
						onClick={handleClose}
					/>
					<motion.div
						initial={{ y: '-100vh' }}
						animate={{ y: 0 }}
						exit={{ y: '-100vh' }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						className='max-w-[90vw] rounded-2xl bg-white px-6 py-10 text-dark shadow-box sm:px-14 sm:py-14'
						style={{ width: `${width}px` }}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

Modal.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	width: PropTypes.number,
	children: PropTypes.node.isRequired,
}
