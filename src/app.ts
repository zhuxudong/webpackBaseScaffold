class Test {
  a: number = 1
  b: any

  constructor() {
    console.log(this.a, this.b)
  }
}

new Test();