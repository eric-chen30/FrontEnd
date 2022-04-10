/**
 * 简单组件  &&  类组件
 */

import { Component } from "react"

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        // 将数据剥离出去
        <tbody>{rows}</tbody>
    )
}


const Table = (props) => {
    const {characterData, removeCharacter} = props
  
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }

// 简单组件
// const simpleComponent = () => {
//     return <div>Example</div>
// }
// 类组件
// class simpleComponent2 extends Component {
//     render() {
//         return <div>Example</div>
//     }
// }

export default Table