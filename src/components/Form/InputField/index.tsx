import React, { forwardRef, Ref } from 'react';
import {
  TextInput as MantineTextInput,
  TextInputProps,
} from '@mantine/core';

const TextInput = (props: TextInputProps, ref?: Ref<HTMLInputElement>) => (
  <MantineTextInput
    {...props}
    ref={ref}
    styles={{
      input: {
        width: '100%',
        minHeight: 40,
        height: 40,
        border: 'none',
        borderRadius: 0,
        backgroundColor: 'var(--white)',
        fontSize: 14,
        fontWeight: 400,
        color: 'var(--black)',
        padding: 15,

        '&::focus': {
          outline: 'none',
        },
      },

      error: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '16px',
        wordBreak: 'break-word',
        letterSpacing: '1px',
      },
    }}
  />
);

TextInput.displayName = 'TextInput';

export default forwardRef(TextInput);