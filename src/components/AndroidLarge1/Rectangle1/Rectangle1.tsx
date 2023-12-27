//src\components\AndroidLarge1\Rectangle1\Rectangle1.tsx
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle1.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 13:15 */
export const Rectangle1: FC<Props> = memo(function Rectangle1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
    </div>
  );
});
