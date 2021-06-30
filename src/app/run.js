/* global dojo */
(function () {
    var baseUrl = './';

    if (dojo.config.build === 'staging') {
        baseUrl = 'https://politicaldistricts.dev.utah.gov/';
    } else if (dojo.config.build === 'prod') {
        baseUrl = 'https://politicaldistricts.ugrc.utah.gov/';
    }

    var config = {
        baseUrl: baseUrl,
        packages: [
            'agrc',
            'app',
            'bootstrap',
            'dgrid',
            'dgrid1',
            'dijit',
            'dojo',
            'dojox',
            'dstore',
            'esri',
            'layer-selector',
            'moment',
            'put-selector',
            'xstyle',
            {
                name: 'spin',
                location: './spinjs',
                main: 'spin'
            }
        ]
    };
    require(config, [
        'app/App',
        'dojo/domReady!'
    ], function (App) {
        window.mapapp = new App({}, 'agrc-map');
    });
}());
