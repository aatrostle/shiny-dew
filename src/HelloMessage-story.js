import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HelloMessage from './HelloMessage';

storiesOf('HelloMessage', module)
  .add('with text', () => (
    <HelloMessage name="Aaron" />
  ));
