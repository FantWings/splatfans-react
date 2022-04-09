import styled from 'styled-components'

export default function HeroFoot() {
  return (
    <Body>
      <span>本网站不隶属于任天堂。所有产品名称、徽标和品牌均为任天堂所有。</span>
      <span>站点设计源于splatoon2.ink，使用React编写。</span>
    </Body>
  )
}

const Body = styled.div`
  margin-top: 2rem;
  padding: 0 2rem 2rem 2rem;
  color: #7a7a7a;
  text-align: center;
  font-size: 8px;
`
