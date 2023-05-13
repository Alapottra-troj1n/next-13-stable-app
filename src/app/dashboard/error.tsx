'use client'

export default function Error({error, reset}: {error: Error, reset: ()=> void}) {
  return (
    <div>Error <button className="py-2 px-4 bg-green-500 rounded-md" onClick={reset} >Try Again</button></div>
  )
}
