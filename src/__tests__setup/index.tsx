import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';

const AllProviders = ({ children }: { children?: React.ReactNode }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;

export const renderWithTheme = (ui: React.ReactElement, options?: RenderOptions) => render(ui, { wrapper: AllProviders, ...options });
