const Header = (props) => <h1>{props.name}</h1>
const Content = ({ parts }) => (
  <div>
    <Part part={parts[0].name} exercises={parts[0].exercises} />
    <Part part={parts[1].name} exercises={parts[1].exercises} />
    <Part part={parts[2].name} exercises={parts[2].exercises} />
  </div>
)
const Total = ({ parts }) => (
  <p>Number of exercises {parts.reduce((a, b) => a + b.exercises, 0)}</p>
)
const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


export default App
