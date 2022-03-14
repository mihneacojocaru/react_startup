import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='mainHeader'>
        <h1 className="title">{title}</h1>
        {/* <h1 style={headingStyle} className="title">{title}</h1> */}
        <Button color='green' text='Hello!' />
        <Button color='steelblue' text='Hello 1!' />
        <Button color='yellow' text='Hello 3!' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

//CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black', 
// };
export default Header