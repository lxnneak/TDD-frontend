import { useState } from "react"

/* TODO - check for states, for hover, clicked and idle
 * classname TEST
 */

// ENUM - 3 different states for button
// IDLE | HOVER | CLICKED
export enum ButtonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}

// you lose on: refactor capabilities, immutability (gain in performance)
type ButtonStateTwo = "idle" | "hover" | "clicked"

// Interface - props
interface CustomButtonProps {
  buttonText: string
}

export function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)
  const [ButtonStateTwo, setButtonStateTwo] = useState<ButtonStateTwo>("idle")

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseLeave={() => {
        setButtonState(ButtonState.idle)
      }}
      onMouseEnter={() => {
        setButtonState(ButtonState.hover)
      }}
      onClick={() => {
        setButtonState(ButtonState.clicked)
      }}
    />
  )
}
