import React, { Component } from 'react'
render(){
  return(
    <div><p>Now I can render any React component on any DOM node I want using ReactDOM.render</p></div>
  )
  
  ReactDOM.render(element, document.getElementById('root'));
}

export default App;
