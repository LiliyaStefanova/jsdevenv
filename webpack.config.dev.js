import path from 'path';

//export the object of the config
export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false, //display a list of all files during bundling
    entry: [    //define the entry point to the application
        path.resolve(__dirname, 'src/index')    //__dirname is a node thing and gives you full path
    ],
    target: 'web',  //can be web or node or electron to determine how webpack bundles the code
    output: {   //where should webpack create the bundle to simulate the bundle
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module : {  //loaders - how to handle the files to bundle
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}
