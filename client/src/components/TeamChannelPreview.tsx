import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview: React.FC<{
  type: string
  channel: any
}> = ({ children, type, channel }) => {
  const { channel: activeChannel, client } = useChatContext()

  const ChannelPreview = () => {
    return (
      <p className="channel-preview__item">
        # {channel?.data?.name || channel?.data?.id}
      </p>
    )
  }

  const DirectPreview = () => {
    const members: any = Object.values(channel?.state?.members).filter(
      (member: any) => member?.user?.id !== client.userID
    )

    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.name}
          size={24}
        />
        <p>{members[0]?.user?.name}</p>
      </div>
    )
  }
  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? 'channel-preview__wrapper__selected'
          : 'channel-preview__wrapper'
      }
      onClick={() => console.log(channel)}
    >
      {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
    </div>
  )
}

export default TeamChannelPreview
