import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      id: uuidv4(),
      name: 'Sushi S',
      details: '2301 Moscrop Street, Burnaby, BC V61 23Y',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      starsSelected: 0,
    },
    {
      id: uuidv4(),
      name: 'Agra Tandoori',
      details: '1255 Canada Way, Burnaby, BC V61 23Y',
      image:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      starsSelected: 0,
    },
    {
      id: uuidv4(),
      name: 'Bandidas Taqueria',
      details: '2544 Sanders Avenue, Richmond, BC V6Y 0B5',
      image:
        'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      starsSelected: 0,
    },
  ]);
  const onChange = (id, starsSelected) => {
    setRestaurants(
      [...restaurants].map((restaurant) => {
        if (restaurant.id === id) {
          restaurant.starsSelected = starsSelected;
        }
        return restaurant;
      })
    );
  };

  return (
    <div className="main-body">
      {[...restaurants].map((restaurant, index) => (
        <Card
          key={index}
          name={restaurant.name}
          details={restaurant.details}
          image={restaurant.image}
          starsSelected={restaurant.starsSelected}
          id={restaurant.id}
          change={(id, starsSelected) => onChange(id, starsSelected)}
        />
      ))}
    </div>
  );
}
export default App;