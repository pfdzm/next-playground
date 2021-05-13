import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CharacterWidget(props: {
  name: string
  species: string
  gender: string
  image: string
}) {
  const isFemale = props.gender === 'Female'

  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ ease: 'easeOut', duration: 2 }}
      className="flex max-w-xs border shadow rounded px-6 py-3 bg-white bg-opacity-50 hover:bg-opacity-80"
    >
      <div className="flex items-center justify-center mr-5">
        <Image
          className="flex-grow-0 h-6 w-6 rounded-full shadow"
          src={props.image}
          width="80"
          height="80"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <h2>{props.species === 'Human' ? 'Human (👶)' : '🤖'}</h2>
        <h3 className={`${isFemale ? 'text-blue-500' : 'text-pink-500'}`}>
          {isFemale ? '💃🏻 female' : '🕺🏽 male'}
        </h3>
      </div>
    </motion.div>
  )
}
