import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD0myzaXEBr0qGubqNPRCNlYmDQtLbr9Q8';

// Create a new component. This component should produce
// some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

// My Notes:
// line 4 const (ES6 content): this is the final value for this "variable", never going to be reassigned
// line 5 JSX: HTML-lookalike but is actually Javascript
// Component Instances does not equal Component Classes
// App is a Component Class