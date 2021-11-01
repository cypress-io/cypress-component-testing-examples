import {render, fireEvent} from '@testing-library/vue'
import App from '../../src/App.vue'

test('increments value on click', async () => {
  const {getByText} = render(App)

  getByText('Times clicked: 0')

  const button = getByText('Increment')

  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})