const menu = {
  _courses: {
    _appetizers: ['mellon', 'groundnut', 'garden egg'],
    _mains: ['Rice', 'Salad', 'yam'],
    _desserts: ['meat pie', 'egg', 'chocolate'],
    get appetizers() {

    },
    set appetizers(appetizerIn) {

    },
    get mains() {

    },
    set mains(mainIn) {

    },
    get desserts() {

    },
    set desserts(dessertIn) {

    }
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
    },
    return {
      mains: this._courses.mains,
    }
    return {
      desserts: this._courses.appetizers,
    }
  }
  addDishToCourse (courseName, dishName, dishPrice) {
  const dish = {
  name:
  Price:
};
this._courses[courseName].push(dish);
}
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = math.floor(math.random() * dishes.length);
  }
generateRandomMeal: function() {
  const appetizers =         this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, the price is $${totalPrice}`
}
};
