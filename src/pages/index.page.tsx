import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Index = () => {
  const route = useRouter();

  return (
    <div>
      <div>Index Page</div>
      <Button colorScheme="customColor" onClick={() => route.push('/login')}>
        Login
      </Button>
    </div>
  );
};

export default Index;
