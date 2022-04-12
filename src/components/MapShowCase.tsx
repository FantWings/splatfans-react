import styled from 'styled-components'

export default function MapShowCase(props: { mapUrl: string }) {
  const { mapUrl } = props
  return (
    <Body className="stage-image" style={{ backgroundImage: `url(https://splatoon2.ink/assets/splatnet${mapUrl})` }}>
      <figure className="image is-16x9" />
    </Body>
  )
}

const Body = styled.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  :hover {
    cursor: pointer;
  }

  figure {
    margin: 0;
    padding: 0;
    &.is-16x9 {
      padding-top: 56.5%;
    }
  }
`
