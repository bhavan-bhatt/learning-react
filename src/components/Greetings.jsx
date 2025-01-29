const Greetings = () => {

  let date = new Date().toLocaleDateString('en-IN')
  return (
    <>
    <h1>
        Welcome to my website
    </h1>
    <p>Current Date: {date}</p>
    </>
  )
}

export default Greetings