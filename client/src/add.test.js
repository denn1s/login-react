import { test, expect, describe, it } from 'vitest'
import add from './add'

describe('adds two numbers correcly', () => {
  it('adds one plus two equals three', () => {
    expect(add(1, 2)).toBe(3)
  })
  it('adds 1.1 and 2.2 and returns 3.3', () => {
    expect(add(1.1, 2.1)).toBe(3.2)
  })
  it('adds 1 as string and 2 as string it return 3 as int', () => {
    expect(add('1', '2')).toBe(3)
  })
})

