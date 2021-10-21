import { Button, chakra, Checkbox, Flex, FormControl, FormErrorIcon, FormErrorMessage, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useFormik } from 'formik';
import { BiLogInCircle } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';
import Card from '../components/Card';
import WebsiteLayout from '../layout/website';
import { useUserAuthStore } from '../state/auth';

const userCredentails = {
  authenticated: true,
  token: 'ij45gtbuijhov45uh5bv46betbytb',
  user: {
    id: '7y7y4vfuhy6b54b667',
    name: 'Jeff Peterson',
  },
};

const SignInPage = (props) => {
  const userAuthStore = useUserAuthStore();

  const form = useFormik<{
    email: string;
    password: string;
    rememberMe?: boolean;
  }>({
    initialValues: { email: '', password: '', rememberMe: true },
    validate: (values) => {
      const errors: { email?: string; password?: string } = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      // set cookie expiry
      delete values.rememberMe;
      // sign in here
      userAuthStore.authenticateUser(userCredentails);
    },
    validateOnChange: true,
  });

  return (
    <WebsiteLayout>
      <Flex align={'center'} justify={'center'}>
        <Stack w="lg" mb="5%" mt="10%">
          <Card>
            <Stack mb={'5%'}>
              <chakra.img
                src="/images/custom-logo.png"
                objectFit="cover"
                css={css`
                  height: 100px;
                `}
              />
            </Stack>

            <chakra.form onSubmit={form.handleSubmit} name="signInForm" autoComplete="off">
              <Stack spacing={4}>
                <FormControl id="email" isInvalid={Boolean(form.errors.email)}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input id="email" type="email" placeholder="someone@example.com" onChange={form.handleChange} value={form.values.email} />
                  <FormErrorMessage>
                    <FormErrorIcon /> {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="password" isInvalid={Boolean(form.errors.password)}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="********" onChange={form.handleChange} value={form.values.password} />
                  <FormErrorMessage>
                    <FormErrorIcon /> {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
                <Stack>
                  <Flex justifyContent="space-between">
                    <Checkbox name="rememberMe" defaultChecked={false}>
                      <span>Remember me</span>
                    </Checkbox>
                    <RouterLink to="/reset-password">
                      <Text color={'blue.400'}>Forgot password?</Text>
                    </RouterLink>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text>Don't have an account? </Text>
                    <RouterLink to="/sign-up">
                      <Text color={'blue.400'}>Sign Up</Text>
                    </RouterLink>
                  </Flex>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                  rightIcon={<BiLogInCircle style={{ backgroundColor: 'transparent' }} />}
                >
                  Sign In
                </Button>
              </Stack>
            </chakra.form>
          </Card>
        </Stack>
      </Flex>
    </WebsiteLayout>
  );
};

export default SignInPage;
