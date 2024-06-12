import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z
    .string()
    .min(6, { message: 'Name must be at least 6 characters' }),
  // age: z.number().min(18), we don't always need custom msg
  age: z
    // biome-ignore lint/style/useNamingConvention: <from Zod>
    .number({ invalid_type_error: 'Age field is required' })
    .min(18, { message: 'You must be at least 18 years old' }),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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
            {...register('name')}
          />
          {errors.name && (
            <p className='text-red-600'>{errors.name.message}</p>
          )}
        </div>
        <div className='mb-3 flex'>
          <label htmlFor='age'>Age</label>
          <input
            className='grow rounded border border-slate-500'
            {...register('age', { valueAsNumber: true })}
            type='number'
            id='age'
          />
          {errors.age && (
            <p className='text-red-600'>{errors.age.message}</p>
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
