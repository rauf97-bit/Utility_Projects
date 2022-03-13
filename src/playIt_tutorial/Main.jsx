import React from 'react'
import Index from './Router_Parameters/Index'
// import Index from './hoc_and_prog_redirect/Index'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import RootReducer from './Redux_intro/RootReducer'

const Main = () => {

  const store = createStore(RootReducer)
  return (
    <Provider store={store}>
      <Index />
    </Provider >
  )
}

export default Main