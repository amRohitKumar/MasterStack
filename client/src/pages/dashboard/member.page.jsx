import React from 'react'
import TwoButtons from './twoButtons.page'

const Member = ({member}) => {
  return (
    <>
         <TwoButtons first="Name" second={member.name}/>
         <TwoButtons first="E-Mail" second={member.email}/>
         <TwoButtons first="Mobile" second={member.number}/>
         <TwoButtons first="Year" second={member.year}/>
         <TwoButtons first="Branch" second={member.branch}/>
    </>
  )
}

export default Member