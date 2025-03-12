declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveExactClasses(classNames: string[]): R
    }
    namespace matchers {
      interface TestingLibraryMatchers<E, R> {
        toHaveExactClasses(element: E, classNames: string[]): R
      }
    }
  }
}
export {}
