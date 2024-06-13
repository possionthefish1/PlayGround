import { FormTwo } from './components/FormTwo';
import { TableTwo } from './components/TableTwo';

const categories = [
  'Utilities',
  'Personal/Hobby',
  'Career',
] as const;

function App() {
  return (
    <div className='container mx-auto'>
      <FormTwo />
      <TableTwo />
    </div>
  );
}
export { App };
