import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import React from 'react';
import Index from 'views/index/index';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Index />);
