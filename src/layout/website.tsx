import { Container, Stack, useColorModeValue } from '@chakra-ui/react';
import { UserAuthContextProvider } from '../state/auth';
import { bgColor } from '../utils';
import WebsiteFooter from './Footer';
import WebsiteHeader from './Header';

const WebsiteLayout = ({ children }: { children: any }) => {
  return (
    <UserAuthContextProvider>
      <Stack bg={useColorModeValue(bgColor.light, bgColor.dark)}>
        <WebsiteHeader />
        <Container maxW="7xl" alignSelf="center">
          {children}
        </Container>
        <WebsiteFooter />
      </Stack>
    </UserAuthContextProvider>
  );
};

export default WebsiteLayout;
