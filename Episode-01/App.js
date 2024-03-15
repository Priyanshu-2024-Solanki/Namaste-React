// hello world using Javascript

// const root = document.getElementById('root');

// const heading = document.createElement('h1');
// heading.innerHTML = 'hello world using javascript'

// root.appendChild(heading);

// hello world using React 

const heading = React.createElement('h1',{},'hello world using React');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);