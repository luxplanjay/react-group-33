import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import Text from "./components/TestText/TestText.jsx"



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

// );





ReactDOM.createRoot(document.getElementById('root')).render(<App />)










// // Coздание через React ( p, p2)
// const p = React.createElement("p", {id: 122, className: "pMy", children:["I am P"]})
// const p2 = React.createElement("p", {id: 121,className: "pMy2", children:["Here P2"]})
// // Coздание через JSX ( p)
// const pJSX = (<p id="JSX3" className='JSXclass' data-item="JSX">JSX3 element</p>)
  
// console.log("pJSX",pJSX)

// const content = "дополнительный текст"

// const divJSX = (<div id="JSXdiv" className='JSXclassDiv' data-item="JSXdiv">
//   {pJSX} 
//   <p id="JSX3copy" className='JSXclasscopy' data-item="JSXcopy">{content}  JSX3 element copy, content, {2+2}   </p>
//   {/* для шаблонного рядка пишем так, есть вторые скобки убрать фигурные - это просто текст */}
//   {/* {`{pJSX}`} */}
//   </div>)
// console.log("divJSX",divJSX)



// // Добавление через React ( p, p2) в созданный div
// const div = React.createElement("div", {id: 123, className: "divClass" , children:[ p, p2]})

// console.log("p",p)
// // Добавление элемента div в html


// // // Работа с массивом элементов в React
// // const users = [
// //   {name: "Alex", age: 30},
// //   {name: "Alex1", age: 31},
// //   {name: "Alex2", age: 32}
// // ]
// // // перебираем весь массив , на каждой итерации получая name и age с массива
// // const result = users.map((element) => {
// //   return <React.Fragment>
// //     <p>{element.name}</p>
// //     <p>{element.age}</p>
// //   </React.Fragment>
// // })
// // console.log("result",result)
// // // добавляем нужные данные в html разметку
// // ReactDOM.createRoot(document.getElementById('root')).render(result)

// // // Работа с массивом элементов в React
// // const users = [
// //   {name: "Alex", age: 30},
// //   {name: "Alex1", age: 31},
// //   {name: "Bob", age: 28},
// //   {name: "Mike", age: 31}
// // ];

// // // отфильтровать users по имени

// // const filteredUsers = users.filter(user => user.name.includes("1"))
// // console.log("filteredUsers",filteredUsers);
// // // отфильтрованный массив map
// // const result = filteredUsers.map((element) => {
// //   return <React.Fragment>
// //     <p>{element.name}</p>
// //     <p>{element.age}</p>
// //   </React.Fragment>
// // });

// // console.log("result",result);

// // // // добавляем нужные данные в html разметку
// // ReactDOM.createRoot(document.getElementById('root')).render(result)

// // Работа с массивом элементов в React
// const users = [
//   {name: "Alex", age: 30},
//   {name: "Alex1", age: 31},
//   {name: "Bob", age: 28},
//   {name: "Mike", age: 31}
// ];

// // отфильтровать users по возрасту

// // const filteredUsers =  users.filter(user => user.age === 31)
// // console.log("filteredUsers",filteredUsers);
// // отфильтрованный массив map
// const App = () => {
//   return (
//     <>
//       {users.map((element) => {
//         return (
//           <div key={element.name}>
//             <img
//               src='https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_1280.jpg'
//               className='card-img-top'
//               alt='...'
//             />
//             <>
//              { Text(element.name) }
//               <p>{element.age}</p>
//             </>
//             <a href="https://www.cat.com/" className='btn btn-primary'>
//               нажми
//             </a>
//           </div>
//         );
//       })}
//     </>
//   );
// };






