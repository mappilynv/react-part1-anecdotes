import React, { useState } from 'react'

{/*1.12*: anecdotes step1: adding a button that can be clicked to display a random anecdote from the field of software engineering*/}
{/*generate random numbers*/}

// const Buttons = ({ value, text }) => {
//   return (
//     <div>
//       <button onClick={value}>{text}</button>
//     </div>
//   )
// }

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)

//   const RandomAnecdotes = () => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }

//   return (
//     <div>
//       {anecdotes [selected]}
//       <Buttons value={RandomAnecdotes} text="Next Anecdote" />
//     </div>
//   )
// }

{/*1.13*: anecdotes step2 Expand your application so that you can vote for the displayed anecdote.*/}

const Buttons = ({ value, text }) => {
  return (
    <div>
      <button onClick={value}>{text}</button>
    </div>
  )
}

const Title = ({ text }) => {
  return (
      <h1>{text}</h1>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  const getVotes = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const RandomAnecdotes = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const HighestVoteAnecdotes = () => {
      return (votes.indexOf(Math.max.apply(null, votes)))
  }


  {/*1.14*: anecdotes step3: Now implement the final version of the application that displays the anecdote with the largest number of votes: */}

  return (
    <div>
      <Title text='Anecdote of the day' />
      {anecdotes [selected]}
      <p>Number of vote for this anecdote: {votes[selected]} votes</p>
      <Buttons value={getVotes} text="Vote" />
      <Buttons value={RandomAnecdotes} text="Next Anecdote" />
      <Title text='Anecdote with most votes' />
      <p>{anecdotes[HighestVoteAnecdotes()]}</p>
      <p>with {votes[selected]} votes </p>
    </div>
  )
}


export default App