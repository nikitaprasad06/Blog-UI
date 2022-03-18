import { formatDate } from ".";
import '@testing-library/jest-dom/extend-expect'

describe('should validate Formatting functions', () => {
  test('should validate formatDate() fn for date values', () => {
    expect(formatDate()).toEqual(null)
  })
})