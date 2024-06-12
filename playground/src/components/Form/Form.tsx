function Form() {
  return (
    <div className='p-8'>
      <h1 className='my-8 text-4xl '>React Hook Form with Zod</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <label htmlFor='description'>Description</label>
          <input
            className='ml-auto max-w-[400px] grow rounded-md transition placeholder:text-wrap focus:outline-none focus:ring-4 focus:ring-blue-400'
            type='text'
            id='description'
            placeholder='What did you buy?'
          />
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='amount'>Amount</label>
          <input
            className='ml-auto max-w-[400px] grow rounded-md transition focus:outline-none focus:ring-4 focus:ring-blue-400'
            type='text'
            id='amount'
            placeholder='How much does it cost?'
          />
        </div>

        <div className='flex items-center gap-2'>
          <label htmlFor='categories'>Categories</label>

          <select
            id='categories'
            title='In what category does it belong to?'
            className='ml-auto max-w-[400px] grow rounded-md transition focus:outline-none focus:ring-4 focus:ring-blue-400'
          >
            <option value={'Utilities'}>Utilities</option>
            <option value={'Personal/Hobby'}>Personal/Hobby</option>
            <option value={'Career'}>Career</option>
          </select>
        </div>
        <button
          className='~px-4/8 ~py-2/4 grow rounded bg-blue-600 font-bold text-white transition active:bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-40'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { Form };
