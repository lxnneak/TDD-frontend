/* TODO: important steps
 * does...
 * - describe exist
 * - it exist
 * - test exist
 * - getByText
 * - render()
 * - expect().toBe()
 */

import { ButtonState, CustomButton } from "./CustomButton"
import { fireEvent, render } from "@testing-library/react" // manual import
import "@testing-library/jest-dom" // manual

// DisplayName() JUNIT == collection of tests, multiple asserts
describe("Easy Examples", () => {
  // test #1
  test("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4)
  })

  // test #2
  test("is 2+4 greater than 0", () => {
    expect(2 + 4).toBeGreaterThan(0)
  })

  // test #3
  test("2-2 equals 0", () => {
    expect(2 - 2).toBe(0)
  })
})

describe("Custom Button Component States", () => {
  // idle
  test("Check if button component starts with idle", () => {
    const buttonText: string = "signup"
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const customButtonComponent = getByText(buttonText)

    expect(customButtonComponent).toHaveClass(ButtonState.idle)
  })

  // hover
  test("Check if button component on hover state change", () => {
    const buttonText: string = "signup"
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const customButtonComponent = getByText(buttonText)

    expect(customButtonComponent).toHaveClass(ButtonState.idle)
    fireEvent.mouseEnter(customButtonComponent)
    expect(customButtonComponent).toHaveClass(ButtonState.hover)
  })

  // clicked
  test("Custom Button Component on click state change", () => {
    const buttonText: string = "signup"
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const customButtonComponent = getByText(buttonText)

    expect(customButtonComponent).toHaveClass(ButtonState.idle)
    fireEvent.click(customButtonComponent)
    expect(customButtonComponent).toHaveClass(ButtonState.clicked)
  })

  test("This test should fail", () => {
    expect(2 + 2).toBe(999)
  })
})
