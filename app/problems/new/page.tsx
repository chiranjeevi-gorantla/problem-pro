import React from 'react';
import { TextField, TextArea, Button } from '@radix-ui/themes';

const NewProblemPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title' />
      <TextArea placeholder='Reply to comment…' />
      <Button>Submit New Problem</Button>
    </div>
  );
};

export default NewProblemPage;
