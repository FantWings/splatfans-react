import { createGlobalStyle } from 'styled-components'
import { squidMask } from './baseImage'
const GlobalStyles = createGlobalStyle`
  // 容器样式
  div.container {
    margin-left: 32px;
    margin-right: 32px;
    max-width: none;
    width: auto;

    // 控制是否为行内样式
    .is-inline {
      display: inline;
    }
  }

  // 按钮样式
  span.button {
    cursor: pointer;
    color: #FFF;

    // 控制是否为圆形按钮
    &.is-rounded {
        border-radius: 100px;
        padding-left: 12px;
        padding-right: 12px;
      }

      // 控制按钮是否为半透明
      &.is-translucent-dark {
        transition: 0.3s;
        background: hsla(0, 0%, 47.8%, 0.4);
        border: hsla(0, 0%, 47.8%, 0.9);
        color: #dbdbdb;
        :hover {
          background: hsla(0, 0%, 100%, 0.4);
        }
      }

      &.is-translucent-light {
        transition: 0.3s;
        background: hsla(0, 0%, 100%, 0.4);
        border: hsla(0, 0%, 47.8%, 0.9);
        color: #ffffff;
        :hover {
          background: #460fc8;
        }
      }
  }

  // 容器组样式
  div.groups {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* :not(:last-child) {
      margin-bottom: 1.5rem;
    } */

    &.flex-app {
      flex-direction: column;
      @media screen and (min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
      }
    }
  
    div.group-left {
      justify-content: flex-start;
    }

    div.group-right {
      justify-content: flex-end;
    }

    div.group-item {
      align-items: center;
      display: flex;
      flex-basis: auto;
      flex-grow: 0;
      flex-shrink: 0;
      justify-content: center;
    }
  }

  // 标题样式
  div.title, div.subtitle {
    color: #FFF;
    &.size-1 {
      font-size: 32px;
    }
    &.size-2 {
      font-size: 28px;
    }
  }

  // 图片样式
  .image {
      display: block;
      position: relative;

      * {
        box-sizing: inherit;
      }

      &.is-48x48 {
        height: 48px;
        width: 48px;
      }

      img {
        width: 100%;
      }
    }

  // 标题样式
  .stage-tittle {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: center;
    @media screen and (max-width: 720px) {
      flex-direction: column;
      align-items: center;
    }
    div.item {
      &.image-box {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      div.title {
        font-size: 32px;
        line-height: 1.3;
      }
    }
  }

  // 背景样式
  div.masked {
    &.squid{
      background-image: linear-gradient(180deg,transparent,rgba(36,36,36,0.1)), url(${squidMask});
      background-position: top;
      background-size: 100% 100%,80px 80px;
    }
  }
`

export default GlobalStyles
