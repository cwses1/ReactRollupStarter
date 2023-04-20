import React from 'react';
import {createRoot} from 'react-dom/client';
import MyAppComponent from './Components/MyAppComponent.jsx';

const myAppRoot = createRoot(document.getElementById('myAppRoot'));
myAppRoot.render(<MyAppComponent />);
