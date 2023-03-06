// Notes on some basic react stuff and syntax

//####################################################################################################
import { useEffect, useState } from "react"; 
//creating a states and its update function
export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
//creating a copy of the object to update a single property and making it more updateable
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
//####################################################################################################

import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevstate => {
      return {
        ...prevstate,
        firstName: "no bolt i can see you!",
        lastName: "",
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card"
      }
    })
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
//#####################################################################################
import "./App.css";
import React from "react";

function App() {
  const [toggle,settoggle] = React.useState(false);

  const clickHandler = () => {
    settoggle(!toggle);
  }

  React.useEffect(() => {
    toggle ? "Welcome to my title Biiiiiiiiiiiiiiiiiiiiiiiiiiiiittttttttttttttttttttttttttcccccccccccccccccccccccccchhhhhhhhhhhhhhhhhhhhhhhhh" : "use effecthook bbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiitttttttttttttttttttttttttttccccccccccccccccccccgggggggggggggggggggg";
  },[toggle]);

  return (
    <div>
      <h1>Yes i made all this on my own stfu</h1>
      <button onClick={clickHandler}>
        Bruh
      </button>
      {toggle && <h2>see i did it ya dumb</h2>}
    </div>
  )
}
//####################################################################################
import "./App.css";
import React from "react";

function App() {
  const [toggle,settoggle] = React.useState(false);

  const clickHandler = () => {
    settoggle(!toggle);
  }

  React.useEffect(() => {
    document.title = toggle ? "Welcome to my title Biiiiiiiiiiiiiiiiiiiiiiiiiiiiittttttttttttttttttttttttttcccccccccccccccccccccccccchhhhhhhhhhhhhhhhhhhhhhhhh" : "use effecthook bbbbbbbbbbbbbbbbbbbbbbbbiiiiiiiiiiiiiiiiiiiiitttttttttttttttttttttttttttccccccccccccccccccccgggggggggggggggggggg";
  });

  return (
    <div>
      <h1>Yes i made all this on my own stfu</h1>
      <button onClick={clickHandler}>
        Bruh
      </button>
      {toggle && <h2>see i did it ya dumb</h2>}
    </div>
  )
}
//######################################################################################
import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then(data => setUser(data))
    };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

//#####################################################################################
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    count === 0 ? setCount(prevCount => prevCount + 1):
    setCount(prevCount => prevCount + prevCount)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus</button>
    </div>
  );
}

//##################################################################################
import React, { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
  ref.current = val;
    }, [val]);
  return ref.current;
}
//#############################################################################################
import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({mousePosition});
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}


