import React from 'react';

import CertificateImg from './../images/UC-7VKCEFDB.jpg';

const AboutPage = () => (
  <div style={{ margin: 10, fontFamily: 'monospace' }}>
    <h1>Warbler Developer Notes</h1>
    <a href="/" style={{ padding: 5, textAlign: 'center', textDecoration: 'none', backgroundColor: 'lightgray' }}>Go Back to APP (Front-end)</a><br/><br/>
    <a title="GO TO UDEMY COURSE" href="https://www.udemy.com/the-advanced-web-developer-bootcamp/">
      <img alt="http://ude.my/UC-7VKCEFDB" src={CertificateImg} style={{ height: 400 }} />
    </a>
    <div style={{ padding: 10, width: 500, backgroundColor: 'lightblue', fontFamily: 'calibri' }}>
      <h4 style={{ margin: 0 }}>DEVELOPER INFO</h4>
      Jonathan Cheng<br/>
      <em>jcheng.deveng@gmail.com</em><br/>
      Github: <a href="https://github.com/jchengdev/">jchengdev</a><br/>
      Linkedin: <a href="https://www.linkedin.com/in/jonathan-cheng-12616a15/">https://www.linkedin.com/in/jonathan-cheng-12616a15/</a>
    </div>
    <br/>
    <h4>Acquired knowledges:</h4>
    <ul>
      <li><strong>Advanced CSS</strong>: pseudoclasses (hover, focus, active), transforms (translate, scale, rotate, transform-origin, vendor prefixes), transitions (transforms, opacity), animations (keyframes, loaders), flexbox</li>
      <li><strong>Javascript</strong>: stack (LIFO), event queue (FIFO), heap, ES5 async (setTimeout/Interval, promise chaining), advanced topics (array methods, call, apply, bind/bind-partially-applied, new, OOP, constructors, prototype chain, prototype methods, closures, prototype inheritance (object cloning))</li>
      <li><strong>AJAX</strong>: XMLHttpRequest (w/JSON), Fetch API, jQuery+XHR, Axios(pure XHR)</li>
      <li><strong>TDD</strong>: Jasmine (unit tests)</li>
      <li><strong>NodeJS</strong>: modules (react, redux, dotenv, jsonwebtoken, bcryptjs, redux-thunk, react-redux)</li>
      <li><strong>Express</strong>: JSON API</li>
      <li><strong>ES2015</strong>: let, const, template strings, arrow functions, default parameters, rest and spread, object/array de-structuring, array swapping, class, extends, super, Maps, Sets, generators</li>
      <li><strong>ES2016/2017</strong>: new operator and methods, async+await, object rest and spread</li>
      <li><strong>D3</strong>: basics (selectors, event listeners, DOM manipulation), data join (enter+append, exit+remove, merge), charts (scatterplots, bar charts, pie charts, histograms, Geo/TopoJSON, force directed graph, dashboard), helping functions (scaling, tooltips, transitions, odds, ends), AJAX (queued data feeding)</li>
      <li><strong>SVG</strong>: line, circles, polygons, path</li>
      <li><strong>React 16</strong>: JSX+Babel, basics (component, imports, inheritance, components integration), state flow (this.props, this.state, this.setState, delegation w/ callbacks), VirtualDOM (Fiber), lifecycle methods</li>
      <li><strong>Authentication</strong>: JWT (jsonwebtoken)</li>
      <li><strong>React Router</strong>: basics</li>
      <li><strong>Redux</strong>: basics, middleware (async)</li>
      <li><strong>Warbler</strong>: complete React+Redux Front-end+Back-end </li>
      <li><strong>Heroku</strong>: server deploy (Procfile), client deploy (buildpack, static.json)</li>
    </ul>
    <h4>Tools:</h4>
    <ul>
      <li><strong>Edit</strong>: SublimeText3, VSCode</li>
      <li><strong>Check</strong>: Chrome Console, JSFiddle, Postman, JSONView, React Developer Tools, Redux DevTools</li>
      <li><strong>auto-prefixer</strong>: https://autoprefixer.github.io/, http://pleeease.io/play/</li>
    </ul>
  </div>
);

export default AboutPage;