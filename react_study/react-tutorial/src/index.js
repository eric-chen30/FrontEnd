import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App'



// 之前的写法
// ReactDOM.render(<App />, document.getElementById('root'))

// 现在的写法
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

/**
 * JSX:JavaScript + XML
 * 
 * 1. className 用于代替 class 添加CSS类
 * 2. JSX 中的属性和方法都用驼峰式命名
 * 3. 自闭合标签必须以 斜杠/ 结束
 */

// JSX 写法
// const headingJSX = <h1 className='site-heading'>Hello, React!</h1>
// NO JSX写法
// const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')

// 花括号嵌入变量、函数、属性
// const name = 'React'
// const headingEmbed = <h1>Hello, {name}</h1>

