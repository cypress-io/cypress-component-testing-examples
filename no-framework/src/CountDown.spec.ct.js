import { mount } from '../helpers/mount.js'
import { CountDown } from './CountDown.js'

describe('CountDown', () => {
  it('should render', () => {
    mount(CountDown())
  })
})
