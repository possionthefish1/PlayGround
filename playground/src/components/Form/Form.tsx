import { type FieldValues, useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const obSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);

  return (
    <section className='container mx-auto p-8'>
      <form
        onSubmit={handleSubmit(obSubmit)}
        className='flex flex-col gap-4 *:flex-col *:gap-1 '
      >
        <div className='mb-3 flex'>
          <label htmlFor='username'>Username</label>
          <input
            className='grow rounded border border-slate-500'
            type='text'
            id='username'
            {...register('name', { required: true, minLength: 6 })}
          />
          {errors?.name?.type === 'required' && (
            <p>This Username is required.</p>
          )}
          {errors?.name?.type === 'minLength' && (
            <p>The username must be at least 6 characters.</p>
          )}
        </div>
        <div className='mb-3 flex'>
          <label htmlFor='age'>Age</label>
          <input
            className='grow rounded border border-slate-500'
            {...register('age', { required: true, min: 18 })}
            type='text'
            id='age'
          />
          {errors?.age?.type === 'required' && (
            <p>Age is required.</p>
          )}
          {errors?.age?.type === 'min' && (
            <p>Wait till you get older.</p>
          )}
        </div>
        <button
          type={'submit'}
          className='self-start rounded bg-blue-600 px-4 py-2 text-white active:bg-fuchsia-500 hover:bg-blue-400'
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export { Form };
