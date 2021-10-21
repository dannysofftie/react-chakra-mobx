import { Box, Heading, Stack, Text, useColorModeValue, ColorProps } from '@chakra-ui/react';

const Card = ({
  children = null,
  width = 'fit-content',
  height = '-webkit-fit-content',
  shadow = 'md',
  title = '',
  subTitle = '',
  bg = '',
}: {
  children?: any;
  height?: string | number;
  width?: string | { base?: string; sm?: string; md?: string; lg?: string; xl?: string };
  title?: string;
  subTitle?: string;
  shadow?: 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  bg?: ColorProps['color'];
}) => {
  const textColor = useColorModeValue('gray.500', 'gray.400');
  const bgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box rounded={'lg'} maxW="100%" height={height} boxShadow={shadow} p={4} bg={bg || bgColor} color={useColorModeValue('gray.800', 'gray.300')}>
      {title && (
        <Stack pl={2} mb={3}>
          <Heading size="sm">{title}</Heading>
          {subTitle && (
            <Text color={textColor} fontSize={'xs'}>
              {subTitle}
            </Text>
          )}
        </Stack>
      )}
      {children}
    </Box>
  );
};

export default Card;
