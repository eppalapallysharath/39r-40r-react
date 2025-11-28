import React from 'react'
import { Parent } from './components/memo/parent';
import { ExampleUsememo } from './components/useMemo/exampleusememo';
const App = () => {
  return (
    <div>
      <ExampleUsememo/>
      {/* <Parent/> */}
    </div>
  )
}

export default App;