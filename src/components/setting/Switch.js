export const Switch = (props) => {
  const change = () => props.onChange(!props.checked)
  
  return <input type="checkbox" checked={props.checked} onChange={change} />
}