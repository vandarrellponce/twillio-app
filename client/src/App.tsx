import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie/es6'
import { ChannelListContainer, ChannelContainer } from './components'
import './App.css'

const apiKey = 'wmhmgcnsw5t8'
const client = StreamChat.getInstance(apiKey)

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App
