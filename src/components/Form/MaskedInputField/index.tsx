import React from 'react'
import { IMaskMixin } from 'react-imask';
import { TextInput as MantineTextInput } from '@mantine/core';

const MaskedTextInput = IMaskMixin(({ inputRef, ...props }: any) => (
  <MantineTextInput
    {...props}
    ref={inputRef}
    styles={{
      root: {
        width: '100%',
      },

      wrapper: {
        width: '100%',
      },

      input: {
        width: '100%',
        minHeight: 40,
        height: 40,
        border: 'none',
        borderRadius: 0,
        backgroundColor: 'var(--secondary-gray)',
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
));

export default MaskedTextInput;