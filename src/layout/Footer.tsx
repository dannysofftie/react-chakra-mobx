import { Box, chakra, Container, Flex, Link, SimpleGrid, Stack, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { bgColor } from '../utils';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const WebsiteFooter = () => {
  return (
    <Box bg={useColorModeValue(bgColor.light, bgColor.dark)} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag size={'sm'} bg={useColorModeValue('green.300', 'green.800')} ml={2} color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <chakra.img
            src={`/images/custom-logo.png`}
            alt="logo"
            objectFit="cover"
            css={css`
              height: 100px;
              aspect-ratio: 1;
            `}
          />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © {new Date().getFullYear()}. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default WebsiteFooter;
