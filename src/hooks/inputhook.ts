import React, { useState } from "react"

function useInput(initialValue: string | number ) {
 const [value, setvalue] = useState(initialValue)

 const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setvalue(e.target.value);

 const clear = () => {setvalue('')}

 return {
     bind: {value, onChange},
     value,
     clear,
    }
}

export {useInput}