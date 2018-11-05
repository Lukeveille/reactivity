import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('name');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <App data={data} />,
    document.body.appendChild(document.createElement('div')),
  );
});