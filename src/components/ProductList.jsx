
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import { addToCart } from "../redux/CartSlice";

const categories = [
  {
    name: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Monstera Deliciosa",
        price: 450,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600"
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 350,
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b8a?w=600"
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 400,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600"
      },
      {
        id: 4,
        name: "Areca Palm",
        price: 550,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600"
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 500,
        image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?w=600"
      },
      {
        id: 6,
        name: "ZZ Plant",
        price: 380,
        image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?w=600"
      }
    ]
  },
  {
    name: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 250,
        image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?w=600"
      },
      {
        id: 8,
        name: "Echeveria",
        price: 200,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600"
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 300,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600"
      },
      {
        id: 10,
        name: "Haworthia",
        price: 220,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600"
      },
      {
        id: 11,
        name: "String of Pearls",
        price: 350,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600"
      },
      {
        id: 12,
        name: "Burro's Tail",
        price: 280,
        image: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=600"
      }
    ]
  },
  {
    name: "Air Purifying Plants",
    plants: [
      {
        id: 13,
        name: "Spider Plant",
        price: 300,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600"
      },
      {
        id: 14,
        name: "Boston Fern",
        price: 400,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600"
      },
      {
        id: 15,
        name: "English Ivy",
        price: 320,
        image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600"
      },
      {
        id: 16,
        name: "Dracaena",
        price: 480,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600"
      },
      {
        id: 17,
        name: "Golden Pothos",
        price: 280,
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600"
      },
      {
        id: 18,
        name: "Chinese Evergreen",
        price: 420,
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600"
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Header />

      <h1 className="page-title">
        Explore Our Houseplants
      </h1>

      {categories.map(category => (
        <section
          className="category-section"
          key={category.name}
        >
          <h2>{category.name}</h2>

          <div className="product-grid">
            {category.plants.map(plant => {
              const isAdded = cartItems.some(
                item => item.id === plant.id
              );

              return (
                <div
                  className="product-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>

                  <p>
                    Price: ₹{plant.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}

export default ProductList;
