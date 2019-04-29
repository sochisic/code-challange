import React, { useState } from 'react'
import { useRouter } from 'wouter';
import PropTypes from 'prop-types'

function Main() {
  const [input, setInput] = useState("");
  const { history } = useRouter();

  return (
    <div className='flex flex-column mw7 ml-auto-l mr-auto-l mt5 mh3'>
      <span className='mb3 tc'>Code-challenge</span>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}

Main.propTypes = {

}

export default Main

