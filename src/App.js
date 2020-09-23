import React from 'react';
import BookList from './Actions/BookList'
import PositionList from './Positions/PositionList'
import ToolList from './Tools/ToolList'
import Description from './Description/Description'
import Explanation from './Explanation/Explanation'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Slide from './Description/Slide'


function App() {

  return (
    <div>
    <div class='tables-container'>
      <Header/>
      <Description/>
      <hr/>
      <Explanation string='Tools that i used'/>
      <hr/>
      <ToolList/>
      <hr/>
      <Explanation string='Positions i worked as programmer'/>
      <hr/>
      <PositionList/>
      <hr/>
      <Explanation string='Books i used to learn programming'/>
      <hr/>
      <BookList/>
      <hr/>
      <Footer/>
      <hr/>
    </div>
    </div>
  );
}

export default App;
