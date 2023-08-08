---
HorseLamp: 用法
---

本 Demo 演示一行文字的用法。

```jsx preview
import { HorseLamp } from 'r-components';

const dataSource = ['测试title1','测试title2','测试title3','测试title4','测试title5','测试title6','测试title7']

export default function App () {
  return (
    <HorseLamp from={200} speed={0.5} style={{width: '300px', backgroundColor: 'skyblue', height: '30px'}}>
      {
        dataSource?.map((item) => {
          return (
            <div
              key={item}
              style={{
                padding: '0 10px',
                height: '30px',
                whiteSpace: 'noWrap'
              }}>
                {item}
              </div>
          )
        })
      }
    </HorseLamp>
  )
}
```
