import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './fx.css';
import './premium.css';
import './premium-home.css';
import './live.css';
import './sm-theme.css';
import './modern-2026.css';
<<<<<<< HEAD
=======
import './brand-refresh.css';
import './contact-page.css';
>>>>>>> ec859e7 (Update website)
import { initMotion } from './lib/motion';
import { initPremium } from './lib/premium';
import { initLive } from './lib/live';
import { initSmEffects } from './lib/sm-effects';
import { initFlyIn } from './lib/fly-in';
import { initPopAssemble } from './lib/pop-assemble';
import { initScrollAnim } from './lib/scroll-anim';

createRoot(document.getElementById('root')!).render(<App />);
initMotion();
initPremium();
initLive();
initSmEffects();
initFlyIn();
initPopAssemble();
<<<<<<< HEAD
initScrollAnim();
=======
initScrollAnim();
>>>>>>> ec859e7 (Update website)
