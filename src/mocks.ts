export const pizzaData = [
  {
    id: 1,
    title: 'Техас',
    description:
      "Лук, Томатный соус Domino's, Кукуруза, Ветчина, Сыр моцарелла, Шампиньоны",
    pictureUrl:
      'https://images.dominos.by/media/dominos/osg/api/2018/12/12/texas_small.png',
    ingredients: ['Лук', 'Кукуруза', 'Ветчина', 'Шампиньоны'],
    energyValue: {
      fats: 6.5,
      protein: 9.4,
      carbohydrates: 28.2,
      value: 208.7
    },
    price: 3.9,
    size: {
      thickness: [
        {
          type: 'Traditional',
          priceRate: 1
        },
        {
          type: 'Thin',
          priceRate: 0.8
        }
      ],
      diameter: [
        {
          value: 23,
          priceRate: 0.8,
          persons: {
            min: 1,
            max: 2
          }
        },
        {
          value: 30,
          priceRate: 1,
          persons: {
            min: 3,
            max: 5
          }
        },
        {
          value: 35,
          priceRate: 1.2,
          persons: {
            min: 5,
            max: 7
          }
        },
        {
          value: 40,
          priceRate: 1.5,
          persons: {
            min: 7,
            max: 9
          }
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Пепперони и томаты',
    description: 'Соус барбекю, Томаты, Сыр моцарелла, Пепперони',
    pictureUrl:
      'https://images.dominos.by/media/dominos/osg/api/2018/12/12/pepperoni_i_tomaty_small.png',
    ingredients: ['Томаты', 'Пепперони'],
    energyValue: {
      fats: 9.4,
      protein: 9.7,
      carbohydrates: 28.2,
      value: 247
    },
    price: 5.8,
    size: {
      thickness: [
        {
          type: 'Traditional',
          priceRate: 1
        },
        {
          type: 'Thin',
          priceRate: 0.7
        }
      ],
      diameter: [
        {
          value: 30,
          priceRate: 1,
          persons: {
            min: 2,
            max: 3
          }
        },
        {
          value: 35,
          priceRate: 1.2,
          persons: {
            min: 3,
            max: 5
          }
        },
        {
          value: 40,
          priceRate: 1.5,
          persons: {
            min: 5,
            max: 7
          }
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Овощная',
    description:
      "Сладкий перец, Сыр моцарелла, Лук, Оливки, Томаты, Шампиньоны, Томатный соус Domino's",
    pictureUrl:
      'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png',
    ingredients: ['Сладкий перец', 'Лук', 'Оливки', 'Томаты', 'Шампиньоны'],
    energyValue: {
      fats: 5.9,
      protein: 8.3,
      carbohydrates: 25.0,
      value: 187.0
    },
    price: 4.9,
    size: {
      thickness: [
        {
          type: 'Traditional',
          priceRate: 1
        },
        {
          type: 'Thin',
          priceRate: 0.8
        }
      ],
      diameter: [
        {
          value: 30,
          priceRate: 1,
          persons: {
            min: 2,
            max: 3
          }
        },
        {
          value: 35,
          priceRate: 1.2,
          persons: {
            min: 3,
            max: 5
          }
        },
        {
          value: 40,
          priceRate: 1.5,
          persons: {
            min: 5,
            max: 7
          }
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Гавайская',
    description: "Ананас, Сыр моцарелла, Томатный соус Domino's, Курица",
    pictureUrl:
      'https://images.dominos.by/media/dominos/osg/api/2018/09/12/gavayskaya.png',
    ingredients: ['Ананас', 'Курица'],
    energyValue: {
      fats: 6.6,
      protein: 10.2,
      carbohydrates: 26.2,
      value: 204.8
    },
    price: 5.5,
    size: {
      thickness: [
        {
          type: 'Traditional',
          priceRate: 1
        },
        {
          type: 'Thin',
          priceRate: 0.8
        }
      ],
      diameter: [
        {
          value: 30,
          priceRate: 1,
          persons: {
            min: 2,
            max: 3
          }
        },
        {
          value: 35,
          priceRate: 1.2,
          persons: {
            min: 3,
            max: 5
          }
        },
        {
          value: 40,
          priceRate: 1.5,
          persons: {
            min: 5,
            max: 7
          }
        }
      ]
    }
  }
];

export const ingredientsOptions = [
  { title: 'Лук', price: 0.2 },
  { title: 'Кукуруза', price: 0.5 },
  { title: 'Ветчина', price: 1.2 },
  { title: 'Томаты', price: 0.7 },
  { title: 'Пепперони', price: 1 },
  { title: 'Сладкий перец', price: 0.7 },
  { title: 'Оливки', price: 1.1 },
  { title: 'Шампиньоны', price: 0.5 },
  { title: 'Ананас', price: 0.8 },
  { title: 'Курица', price: 1.2 }
];
