import { Box, Button, chakra, Flex, Icon, Link, Popover, PopoverContent, PopoverTrigger, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { observer } from 'mobx-react-lite';
import { Fragment } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useUserAuthStore } from '../state/auth';
import { RouterLink, themeColors } from '../utils';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
];

const DesktopSubNav = ({ label = '', href = '#', subLabel = '' }) => {
  const hoverColor = useColorModeValue('pink.50', 'gray.900');

  return (
    <Fragment>
      {!href?.includes('http') ? (
        <chakra.span>
          <RouterLink to={href ?? '#'}>
            <Stack direction={'row'} align={'center'}>
              <Box>
                <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
                  {label}
                </Text>
                <Text fontSize={'sm'}>{subLabel}</Text>
              </Box>
              <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
                <Icon color={'pink.400'} w={5} h={5} as={BiRightArrow} />
              </Flex>
            </Stack>
          </RouterLink>
        </chakra.span>
      ) : (
        <Link role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: hoverColor }}>
          <Stack direction={'row'} align={'center'}>
            <Box>
              <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
                {label}
              </Text>
              <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>
            <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
              <Icon color={'pink.400'} w={5} h={5} as={BiRightArrow} />
            </Flex>
          </Stack>
        </Link>
      )}
    </Fragment>
  );
};

const WebsiteHeader = () => {
  const userAuth = useUserAuthStore();
  const [popOverColor] = [useColorModeValue('gray.600', 'gray.200'), useColorModeValue('gray.800', 'white'), useColorModeValue('white', 'gray.800')];

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      maxWidth="8xl"
      minWidth="356px"
      width="100%"
      css={css`
        position: sticky;
        z-index: 10;
        top: 0;
        transition: height 0.5s;
         line-height 0.5s;
      `}
      mx="auto"
      h={100}
    >
      <Stack direction={'row'} spacing={4}>
        {navItems.map((navItem) => {
          return (
            <Box key={navItem.label}>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  {!navItem.href?.includes('http') ? (
                    <chakra.span>
                      <RouterLink to={navItem.href ?? '#'}>{navItem.label}</RouterLink>
                    </chakra.span>
                  ) : (
                    <RouterLink to={navItem.href ?? '#'}>{navItem.label}</RouterLink>
                  )}
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent border={0} boxShadow={'xl'} bg={popOverColor} p={4} rounded={'xl'} minW={'sm'}>
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          );
        })}
      </Stack>
      {userAuth.state.authenticated ? (
        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <RouterLink to="/sign-in">
            <Button fontSize={'sm'} fontWeight={400} color="blue.700">
              Dashboard
            </Button>
          </RouterLink>
          <chakra.span>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={themeColors.primary}
              href={'#'}
              _hover={{
                bg: themeColors.primaryHover,
              }}
              onClick={(ev) => {
                userAuth.revokeAuth();
              }}
            >
              Log Out
            </Button>
          </chakra.span>
        </Stack>
      ) : (
        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <RouterLink to="/sign-in">
            <Button fontSize={'sm'} fontWeight={400}>
              Sign In
            </Button>
          </RouterLink>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={themeColors.primary}
            href={'#'}
            _hover={{
              bg: themeColors.primaryHover,
            }}
          >
            Sign Up
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default observer(WebsiteHeader);
