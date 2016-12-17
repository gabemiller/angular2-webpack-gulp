const PORT = 3000;

// polyfills have to be first
//import 'angular2-universal-polyfills';

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';
import 'zone.js/dist/long-stack-trace-zone';

import './_workaround.node';
import { createEngine, ExpressEngineConfig } from 'angular2-express-engine';
import { MainModule } from '../app/modules/main-server/main.module';  // will change depending on your app

import * as express from 'express';

const app = express();

// 1. set up Angular Universal to be the rendering engine for Express
app.engine('html', createEngine({}));

app.set('port', PORT);
app.set('views', "dist");
app.set('view engine', 'html');
app.set('json spaces', 2);

// 2. get the top level NgModule for the app and pass in important values to Angular Universal
app.get('/*', (req, res) => {

    // Our Universal - express configuration object
    const expressConfig : ExpressEngineConfig = {
        req,
        res,
        ngModule: MainModule,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3000'
    };

    // NOTE: everything passed in here will be set as properties to the top level Zone
    // access these values in your code like this: Zone.current.get('req');
    // this is temporary; we will have a non-Zone way of getting these soon
    res.render('index', expressConfig);
});

let server = app.listen(app.get('port'), () => {
    console.log(`Listening on: http://localhost:${server.address().port}`);
});