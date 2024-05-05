'use client';
import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

const NewProblemPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title' />
      <SimpleMDE placeholder='Description' />
      <Button>Submit New Problem</Button>
    </div>
  );
};

export default NewProblemPage;
