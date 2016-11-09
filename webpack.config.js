var path=require('path');
var HtmlwebpackPlugin=require('html-webpack-plugin');
//定义文件夹的路径
var ROOT_PATH=path.resolve(__dirname);
console.log(ROOT_PATH);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');
module.exports={
	//项目的文件夹 可以直接使用文件夹名称，默认会找index.js 
	entry:APP_PATH,
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	//webpack使用loader的方式来处理各种各样的资源
	module:{
		loaders:[
		    /*
		    {
		        test: /\.css$/,
		        loaders: ['style', 'css'],
		        include: APP_PATH
		    },
		     */
			{
		        test: /\.jsx?$/,
		        loader: 'babel',
		        include: APP_PATH,
		        query: {
		          presets: ['es2015']
		        }
		    }
		]
	},
	//添加我们的插件 会自动生成一个html文件
	plugins:[
		new HtmlwebpackPlugin({
			title:'Hello World app'
		}) 
	],
	//开发服务器
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
  }
}
