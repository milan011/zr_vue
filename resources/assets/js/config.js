/**
 * Defines the API route we are using.
 */
var api_url = 'http://www.myvue.net/api';
var app_url = 'http://www.myvue.net';
/*var gaode_maps_js_api_key = '33c20882595f1fecc2d31c8c73a38da7';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://roast.test/api/v1';
        app_url = 'http://roast.test';
        break;
    case 'production':
        api_url = 'http://roast.demo.laravelacademy.org/api/v1';
        app_url = 'http://roast.demo.laravelacademy.org';
        break;
}*/
const ROAST_CONFIG = {
    API_URL: api_url,
    APP_URL: app_url,
    // GAODE_MAPS_JS_API_KEY: gaode_maps_js_api_key
};

const infoSelfStatus = {
    1: '未返还',
    2: '返还中',
    3: '已返还',
};

const jituanStatus = {
    0: '否',
    1: '是',
};

export { ROAST_CONFIG, infoSelfStatus ,jituanStatus }

/*export const zrConfig = {
    infoSelfStatus: infoSelfStatus,
    jituanStatus: jituanStatus,
};*/
