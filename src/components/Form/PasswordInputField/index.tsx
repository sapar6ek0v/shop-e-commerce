import React, { forwardRef, Ref } from 'react';
import {
  PasswordInput as MantinePasswordInput,
  PasswordInputProps,
} from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const PasswordInput = (props: PasswordInputProps, ref?: Ref<HTMLInputElement>) => (
  <MantinePasswordInput
    {...props}
    ref={ref}
    visibilityToggleIcon={({ reveal, size }) =>
      reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
    }
    styles={{
      wrapper: {
        minHeight: 40,
        height: 40,
      },

      input: {
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: 0,
        backgroundColor: 'var(--white)',
        
        padding: 15,

        '&::focus': {
          outline: 'none',
        },
      },

      innerInput: {
        height: '100%',
        fontSize: 14,
        fontWeight: 400,
        color: 'var(--black)',
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

PasswordInput.displayName = 'PasswordInput';

export default forwardRef(PasswordInput);