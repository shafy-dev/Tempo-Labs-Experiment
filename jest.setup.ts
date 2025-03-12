import '@testing-library/jest-dom'
import 'mock-match-media/jest-setup'

// TODO: we can work on the coloring with redent package in the future
function splitClassNames(str: string) {
  if (!str) {
    return []
  }
  return str.split(/\s+/).filter((s) => s.length > 0)
}
function isSubset(subset: string[], superset: string[]) {
  return subset.every((item) => superset.includes(item))
}
expect.extend({
  toHaveExactClasses: (htmlElement: HTMLElement, expected: string[]) => {
    const receivedClassnames = splitClassNames(
      htmlElement!.getAttribute('class') ?? '',
    )

    const expectedClassnames = expected.reduce<string[]>(
      (acc, className) => acc.concat(className),
      [],
    )
    return {
      pass:
        isSubset(expectedClassnames, receivedClassnames) &&
        expected.length === receivedClassnames.length,
      message: () => {
        return `got: ${receivedClassnames} \nexpected: ${expectedClassnames}`
      },
    }
  },
})
