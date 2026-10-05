import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './fx.css';
import './premium.css';
import './premium-home.css';
import { initMotion } from './lib/motion';
import { initPremium } from './lib/premium';

createRoot(document.getElementById('root')!).render(<App />);
initMotion();
initPremium();