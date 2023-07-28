type Props = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        minHeight: '100vh',
        background: '#F7F7F9',
      }}
    >
      <div style={{ display: 'grid', width: '100%' }}>{children}</div>
    </div>
  )
}
