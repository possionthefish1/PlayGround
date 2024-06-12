import { Form } from './components/Form';
import { Table } from './components/Table';

export const categories = ['Utilities', 'Personal/Hobby', 'Career'];

function App() {
  return (
    <div className='container mx-auto mt-16 flex flex-col items-center justify-center rounded-lg p-8 font-medium text-slate-800 shadow-md'>
      <Form />
      <Table />
    </div>
  );
}
export { App };
