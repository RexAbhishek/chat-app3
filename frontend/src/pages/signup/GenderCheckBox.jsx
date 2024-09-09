const GenderCheckbox = ({ onCheckboxChange }) => {
	const handleCheckbox = (event) => {
	  const gender = event.target.value;
	  console.log(gender)
	  onCheckboxChange(gender);
	};
  
	return (
		<div className='flex'>
		<div className='form-control' style={{ marginRight: '10px' }}>
		  <label className='label gap-2 cursor-pointer'>
			<span className='label-text'>Male</span>
			<input
			  type='radio'
			  name='gender'
			  value='male'
			  className='radio border-slate-900'
			  onChange={handleCheckbox}
			/>
		  </label>
		</div>
		<div className='form-control'>
		  <label className='label gap-2 cursor-pointer'>
			<span className='label-text'>Female</span>
			<input
			  type='radio'
			  name='gender'
			  value='female'
			  className='radio border-slate-900'
			  onChange={handleCheckbox}
			/>
		  </label>
		</div>
	  </div>
	)
  };
  
  export default GenderCheckbox;
  