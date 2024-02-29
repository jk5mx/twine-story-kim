import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import naive from 'naive-ui';
import StartPage from '@/components/StartingPage.vue';
import Intro from '@/components/IntroPage.vue';
import Diplomacy from '@/components/DiplomacyPage.vue';
import War from '@/components/WarPage.vue';
import WarEnding from '@/components/EndPageWar.vue';
import murder from '@/components/MurderPage.vue'
import peace2 from '@/components/PeacePart2.vue'
import App from './App.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    { path: '/start', component: StartPage },
    { path: '/intro', component: Intro },
    { path: '/war', component: War },
    { path: '/diplomacy', component: Diplomacy },
    { path: '/endingWar', component: WarEnding },
    { path: '/murder', component: murder },
    { path: '/peace', component: peace2 },
    { path: '/', redirect: '/start' }, 
    
 ],
});
createApp(App).use(router).use(naive).mount('#app');
