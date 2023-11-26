const path = require("path");

module.exports = {
    mode: "development",
    // entry: "./src/section19-basicTypes/Aula19-exercicio/index.ts",
    entry: "./src/section20-POO/Aula35-exercicio/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "tsconfig.frontend.json",
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        // path: path.resolve(__dirname, "projects", "form", "assets", "js"),
        path: path.resolve(__dirname, "projects", "video", "assets", "js"),
    },
    devtool: "source-map",
};
