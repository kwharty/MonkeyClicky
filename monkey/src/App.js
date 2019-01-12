import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import MonkCard from "./components/MonkCard";


var monk1 = require('../src/assets/images/monk1.jpg');
var monk2 = require('../src/assets/images/monk2.jpg');
var monk3 = require('../src/assets/images/monk3.jpg');
var monk4 = require('../src/assets/images/monk4.jpg');
var monk5 = require('../src/assets/images/monk5.jpg');
var monk6 = require('../src/assets/images/monk6.jpg');
var monk7 = require('../src/assets/images/monk7.jpg');
var monk8 = require('../src/assets/images/monk8.jpg');
var monk9 = require('../src/assets/images/monk9.jpg');

const monkImgages = [

  {
    src: require('../src/assets/images/monk1.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk2.jpg'),
    clicked: false,
  },

  {
    src: require('../src/assets/images/monk3.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk4.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk5.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk6.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk7.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk8.jpg'),
    clicked: false,
  },
  {
    src: require('../src/assets/images/monk9.jpg'),
    clicked: false,
  }

]

//ORIGINAL LONG-WINDED ROUTING:

// function App() {
//   return (
//     <Wrapper>
//       <Title>Monkey Time</Title>
//       <MonkCard
//         image={monk1}
//       />
//       <MonkCard
//         image={monk2}
//       />
//       <MonkCard
//         image={monk3}
//       />
//       <MonkCard
//         image={monk4}
//       />
//       <MonkCard
//         image={monk5}
//       />
//       <MonkCard
//         image={monk6}
//       />
//       <MonkCard
//         image={monk7}
//       />
//       <MonkCard
//         image={monk8}
//       />
//       <MonkCard
//         image={monk9}
//       />
//     </Wrapper>
//   );
// }



function App(monkImgages) {

  let monkImg = monkImgages.src.map;
  let monkImgClk = monkImgages.clicked.map;
  return (
    <Wrapper>
      <Title>Monkey Time</Title>
      <MonkCard
        image = {monkImg}
        clicked={monkImgClk}
      />
 
    </Wrapper>
  );
}

export default App;
