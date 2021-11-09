import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Assignments 5

// const redux = require('redux')
// const createStore = redux.createStore

// const BUY_CAKE ="Buy_Cake"

// function BuyCake() {
//   return {
//     type : BUY_CAKE,
//     info : "first redux action"
//   }
// }

// // (previousState, action ) => newState
// const initialState = {
//   numOfCakes : 10
// }


// const reducer = (state = initialState , action) => {
//   switch(action.type){
//     case BUY_CAKE : 
//         return {
//           ... state,
//           numOfCakes : state.numOfCakes -1
//         }
//     default : return state 
//   }
// }


// const store = createStore(reducer)
// console.log("Initial state" , store.getState())
// const unsubscribe = store.subscribe(() => console.log("Update State",store.getState()))
// store.dispatch(BuyCake())
// store.dispatch(BuyCake())
// store.dispatch(BuyCake())
// unsubscribe()

reportWebVitals();
