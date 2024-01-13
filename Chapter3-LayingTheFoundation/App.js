import React from 'react';
import ReactDOM  from 'react-dom/client';

const HeadingComponent = () => (
    <div id='container'>
<h1 id='heading'>Namaste react using JSX</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
