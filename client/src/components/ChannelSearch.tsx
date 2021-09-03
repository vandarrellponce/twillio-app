import { useState } from 'react'
import { SearchIcon } from '../assets'

const ChannelSearch = () => {
  const [query, setQuery] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLoading(true)
    setQuery(e.target.value)
  }

  const getChannels = async (text: string) => {
    try {
      // fetch channels
    } catch (error) {
      setQuery('')
    }
  }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default ChannelSearch
