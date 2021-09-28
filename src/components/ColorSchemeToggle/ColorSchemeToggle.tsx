import React from 'react';
import { useMantineColorScheme, Button } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button color={colorScheme === 'light' ? 'blue' : 'orange'} onClick={() => toggleColorScheme()}>
      {colorScheme === 'light' ? 'Dark color scheme' : 'Light color scheme'}
    </Button>
  );
}
