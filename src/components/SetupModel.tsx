import styled from 'styled-components'

export default function SetupModel({ children }: { children: any }) {
  return (
    <Body className="fullscreen fixed center">
      <div className="LoginContainer">{children}</div>
    </Body>
  )
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.fullscreen {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  &.fixed {
    position: fixed;
  }

  div.title {
    font-size: 1.5rem;
  }

  div.subtitle {
    font-size: 14px;
  }
  div.text-center {
    align-items: center;
  }

  div.LoginContainer {
    display: flex;
    max-width: 800px;
    border-radius: 18px;
    overflow: hidden;
    background-color: #333;
  }
`
