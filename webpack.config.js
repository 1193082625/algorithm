const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  "mode": "development",
  //指定入口文件
  entry: "./src/main.ts",
  //指定打包文件所在的目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, './dist'),
    //打包后文件的文件
    filename: 'bundles.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
      watch: true
  }
},

  //指定webpack打包时要是用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        // test指定是规则生效的文件
        test: /\.ts$/,
        use: [{
          //指定预加载器
          loader: "babel-loader",
          //配置babel
          options: {
            //配置预定义的环境
            presets: [
              [
                //制定环境插件
                "@babel/preset-env",
                //配置信息
                {
                  //要兼容的浏览器
                  targets: {
                    "chrome": "104"
                  },
                  //指定corejs版本
                  "corejs": "3",
                  //使用corejs的方式usage表示按需加载
                  "useBuiltIns": "usage"
                }
              ]
            ]

          }
        }, 'ts-loader'],
        //要排除的文件
        exclude: /node-modules/
      },{
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          //引入postcss
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  //配置webpack插件
  plugins: [
    //自动生成html文件 并引入相关的资源
    new HTMLWebpackPlugin({
      title: 'project',
      //模板选项 根据模板生成html文件
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  //用来设置引用的模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}