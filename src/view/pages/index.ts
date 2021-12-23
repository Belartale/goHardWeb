// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const About = lazy(() => import(/* webpackChunkName: "About" */ './About'));
export const Services = lazy(() => import(/* webpackChunkName: "Services" */ './Services'));
export const Technologies = lazy(() => import(/* webpackChunkName: "Technologies" */ './Technologies'));
export const Portfolio = lazy(() => import(/* webpackChunkName: "Portfolio" */ './Portfolio'));
