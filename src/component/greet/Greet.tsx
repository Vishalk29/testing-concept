import { GreetProps } from './Greet1.types'
export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : 'Guest'}</div>
}
