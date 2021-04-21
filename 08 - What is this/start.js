(() => {
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }

  // // printName();
  // const sutthinart = { name: 'Sutthinart', printName }
  // const jane = { name: 'Jane', printName }

  // sutthinart.printName();
  // jane.printName();

  // name = 'Global';
  // printName();

  // function Person(name) {
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const sutthinart = new Person('Sutthinart');

  // sutthinart.printName();

  function printName(nationality, city) {
    console.log(this);
    console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);
  }

  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);

    const printSutthinart = printName.bind(this);
    printSutthinart(this.nationality, this.city);
  }

  const sutthinart = new Person('Sutthinart', 'Thai', 'Chiangmai')
})();
