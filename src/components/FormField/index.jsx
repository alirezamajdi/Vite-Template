import PropTypes from 'prop-types'

export default function FormField({ formik, name, type, label, placeholder, options }) {
	const inputCn = !formik.touched[name]
		? 'border-secondary2'
		: formik.errors[name]
			? 'border-red'
			: 'border-green'

	return (
		<div className='relative flex flex-col gap-1'>
			<label className='ms-1 text-sm text-black sm:text-base'>{label}</label>
			<div className='relative mb-2'>
				{type === 'select' ? (
					<select
						className={`w-full appearance-none rounded-2xl border bg-white px-5 py-2 outline-none placeholder:text-sm placeholder:text-gray-600 sm:py-3 sm:placeholder:text-base ${inputCn}`}
						{...formik.getFieldProps(name)}
					>
						<option defaultChecked hidden>
							{placeholder}
						</option>
						{options.map((item, index) => (
							<option key={index}>{item}</option>
						))}
					</select>
				) : type === 'textarea' ? (
					<textarea
						className={`w-full rounded-2xl border bg-white px-5 py-2 outline-none placeholder:text-sm placeholder:text-gray-600 sm:py-3 sm:placeholder:text-base ${inputCn}`}
						placeholder={placeholder}
						cols={5}
						{...formik.getFieldProps(name)}
					/>
				) : (
					<input
						className={`w-full rounded-2xl border bg-white px-5 py-2 outline-none placeholder:text-sm placeholder:text-gray-600 sm:py-3 sm:placeholder:text-base ${inputCn}`}
						placeholder={placeholder}
						type={type}
						{...formik.getFieldProps(name)}
					/>
				)}
			</div>
			{formik.touched[name] && formik.errors[name] ? (
				<div className='absolute right-0 top-0 px-2 py-0.5 text-xs font-bold text-red-500'>
					{formik.errors[name]}
				</div>
			) : null}
		</div>
	)
}

FormField.propTypes = {
	formik: PropTypes.object,
	name: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	options: PropTypes.array,
}
