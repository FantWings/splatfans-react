import styled from 'styled-components'

export default function MapShowCase({ mapUrl, name }: { mapUrl: string; name: string }) {
  return (
    <Body className="stage-image" style={{ backgroundImage: `url(https://app.splatoon2.nintendo.net${mapUrl})` }}>
      <div className="map-name">{name}</div>
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

  div.map-name {
    color: #fff;
    position: absolute;
    right: 4px;
    bottom: 4px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    line-height: 1.5;
    padding: 0 8px;
  }

  figure {
    margin: 0;
    padding: 0;
    &.is-16x9 {
      padding-top: 56.5%;
    }
  }
`
