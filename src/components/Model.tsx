import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Model(props: { active: boolean; children: any; onClose: Function }) {
  let { active, children, onClose } = props
  const [isActive, setIsActive] = useState(active)
  useEffect(() => {
    setIsActive(active)
  }, [active])

  return (
    <Body className={`model ${isActive ? 'visable' : ''}`}>
      <div className="background">
        <span
          className="closeModel"
          onClick={() => {
            setIsActive(false)
            onClose()
          }}
        />
        <div className="model-content">{children}</div>
      </div>
    </Body>
  )
}

const Body = styled.div`
  display: none;
  &.visable {
    display: flex;
  }
  span.closeModel {
    position: fixed;
    top: 32px;
    right: 32px;
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
    cursor: pointer;
    :before,
    :after {
      background-color: #fff;
      content: '';
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform-origin: center center;
    }
    :before {
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      height: 2px;
      width: 50%;
    }
    :after {
      transform: translateX(-50%) translateY(-50%) rotate(135deg);
      width: 50%;
      height: 2px;
    }
  }
  div.background {
    display: flex;
    background-color: rgba(10, 10, 10, 0.86);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    justify-content: center;
    align-items: center;
  }
  div.model-content {
    max-width: 640px;
  }
`
