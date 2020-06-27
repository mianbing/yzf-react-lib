# Button

Demo:

```tsx
/**
 * title: 我是标题
 * desc: 我是简介，我可以用 Markdown 来编写
 */

import React from 'react';
import { Button } from 'yzf-react-lib';

export default () => (
  <div>
    <Button></Button>
    <Button type={'danger'} text={'错误提示'}></Button>
    <Button type={'warn'} text={'警告按钮'}></Button>
    <Button type={'disable'} text={'禁止点击'}></Button>
  </div>
);
```
