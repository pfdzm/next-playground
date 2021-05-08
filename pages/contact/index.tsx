import React from 'react'

export default function Contact() {
  const [name, setName] = React.useState('')
  return (
    <main>
      <h1>Contact</h1>
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col items-center rounded py-1 px-3 space-y-5"
      >
        <div className="flex flex-col w-full items-center justify-center">
          <label htmlFor="name">What's your name?</label>
          <input
            id="name"
            type="text"
            onChange={(e) => {
              handleChange(e, setName)
            }}
            value={name}
          />
        </div>

        <button
          className="border-2 rounded py-1 px-3 text-blue-500 border-blue-500"
          type="submit"
          aria-roledescription="submit-button"
        >
          Submit
        </button>
      </form>
    </main>
  )
}

function handleChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<string>>
) {
  console.log(e.target.value)
  setter(e.target.value)
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  console.log(e.currentTarget.elements)
}
