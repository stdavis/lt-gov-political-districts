(function () {
    var config = {
        packages: [
            'agrc',
            'app',
            'bootstrap',
            'dgrid',
            'dgrid1',
            'dijit',
            'dojo',
            'dojox',
            'esri',
            'layer-selector',
            'moment',
            'put-selector',
            'sherlock',
            'xstyle',
            {
                name: 'spin',
                location: './spinjs',
                main: 'spin'
            }
        ],
        map: {
            sherlock: {
                'spinjs/spin': 'spin'
            }
        }
    };
    if (require.baseUrl === './dojo/') {
        config.baseUrl = './';
    }
    require(config, [
        'app/App',
        'dojo/domReady!'
    ], function (App) {
        window.mapapp = new App({}, 'agrc-map');
    });
}());
