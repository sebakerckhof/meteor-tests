class Foo {
  constructor() {
    this.foo = 'foo';
  }

  onLoad() {
    this.foo = 'bar';
    console.log(`${this.foo}__`);
  }
}

var foo = new Foo();

foo.onLoad();
