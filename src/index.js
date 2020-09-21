import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';
import { HookApp } from './HookApp';

ReactDOM.render(
    <CounterWithCustomHook />,
    document.getElementById('root')
);