/**测试urlLoader*/
import url from './test.jpg'
/**测试cssLoader*/
// import './test.css'
/**测试lessLoader*/
import './test.less'

class Test {
  constructor() {
    this.polyfillTest();//新API
    this.babelTest();//新语法
    this.urlLoaderTest();
  }

  polyfillTest() {
    console.log(Array.isArray([1, 2, 3]))
    this.promiseTest();
  }

  babelTest() {
    return () => 1
  }

  urlLoaderTest() {
    console.log("urlLoader:" + url)
  }

  promiseTest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("promise resolve")
        resolve(123)
      }, 1000)
    })
  }
}

export default new Test()