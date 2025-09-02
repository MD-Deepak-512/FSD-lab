import React from 'react'
import FirstComp from './prop/Firstcomp'
import SecondComp from './prop/SecondComp'
import ThirdComp from './prop/ThirdComp'
function AppPassData() {
  return (
     <div>
       <FirstComp name="CSE" />
       <SecondComp  name = "Data Science"/>
       <ThirdComp name = "Artificial Intelligence"/>
    </div>
  )
}

export default AppPassData