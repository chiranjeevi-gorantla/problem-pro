import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const ProblemPage = () => {
  return (
    <div>
      <Button>
        <Link href='/problems/new'>New Problem</Link>
      </Button>
    </div>
  );
};

export default ProblemPage;
