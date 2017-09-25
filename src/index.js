import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json';

import { getEvents } from "./Events.js";


ReactDOM.render(getEvents(events), document.getElementById('root'));
