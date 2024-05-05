'use client';
import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';

interface ProblemForm {
  title: string;
  description: string;
}

const NewProblemPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<ProblemForm>();

  return (
    <form
      className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/problems', data);
        router.push('/problems');
      })}
    >
      <TextField.Root placeholder='Title' {...register('title')} />
      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder='Description' {...field} />
        )}
      />

      <Button>Submit New Problem</Button>
    </form>
  );
};

export default NewProblemPage;
