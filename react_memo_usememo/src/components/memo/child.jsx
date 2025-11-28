import React,{memo} from 'react'

 const Child = (props) => {
    console.log("child")
  return (
    <div>
        <h3>Child</h3>
        <p>{props.name}</p>
    </div>
  )
}
// export const ChildMemo = React.memo(Child)
export const ChildMemo = memo(Child)
