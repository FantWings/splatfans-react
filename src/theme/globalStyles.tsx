import { createGlobalStyle } from 'styled-components'

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
  a.button {
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

`

export default GlobalStyles
/* 
    
    // 当前模式盒子通用样式
    .main-schedule-box {
      max-width: 600px;
      padding: 35px 10px 10px 10px;
      margin: auto;
      border-radius: 32px;

      // 打孔样式
      -webkit-mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
      mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 600px 960px;
      mask-size: 600px 960px;
      -webkit-mask-position: center top;
      mask-position: center top;

      &.regular {
        background-color: #19d719;
      }

      &.masked {
        // 背景斜纹样式
        background-image: linear-gradient(180deg, transparent, rgba(36, 36, 36, 0.1)),
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADiBAMAAAChPgbkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURRcXF0dwTBUVFRYWFgAAABoaGhkZGRUVFRgYGAAAAAAAAB4eHiQkJBISEkRDNy8AAAAOdFJOUxYAGBcDEwoMFQUBEQcOBwHpdgAAAjdJREFUeNrt271NBDEUReGnjUlGIoGICCKkbYIKqIASqIEm6IGMDiiBjtj5XXvGz9k9Cde5dfTFvo6Xc6TnacjP/Xd+7/TbuRi3r52b752bXw/5xedecaCRMdDIGGjkpQgjL0UYORZZ5FhkkVMRRU5FFDkXSeRcJJFLEUQuRRC5FjnkWuSQWxFDbkUMeS1SyGuRQhZFCFkUIWRZZJBlkUFWRQRZFRFkXSSQdZFA7ooAclcEkPuiHrkv6pGHohx5KMqRx6IaeSyqkY2iGNkoipGtohbZKmqRzaIU2SxKke2iEtkuKpFJUYhMikJkVtQhs6IOmRZlyLQoQ+ZFFTIvqpCdogjZKYqQvaIGGW80Mh5pZJxoZBhppJFGGmmkkUYaaaSRRhpppJFGGmmkkUYaaeR/Rp5pZHzQyPikkXFHI2OgkTHQyBho5KUII8f3RxY5Flnk9MaKIqciipzfkUnkXCSRy1s5iFyKIHLdA3DItcght80DhtyKGPK666CQ1yKFLLYrELIoQshyn8MgyyKDrDZICLIqIsh6Z0Ug6yKB3G3JAOSuCCD3ezk9cl/UIw+bQDnyUJQjj7tHNfJYVCMb204xslEUI1v7VS2yVdQimxtdKbJZlCLbO2Qlsl1UIpOttRCZFIXIbE+uQ2ZFHTLdzMuQaVGGzP8FqJB5UYXs/H0QITtFEbL3v0OD7BU1yPihkXFDIwNHhpFGGmmkkUYaaaSRRhpppJFGGmmkkUYaaaSRRhoJIgNH/gHUGcb6oO4YfwAAAABJRU5ErkJggg==);
        background-position: top;
        background-size: 100% 100%, 80px 80px;
      }
    }

    // 当前模式标题样式
    div.level {
      display: flex;
      justify-content: space-between;
      color: #fff;
      :not(:last-child){
        margin-bottom: 1.5rem;
      }

      div.level-left {
        align-items: center;
        justify-content: flex-start;
        .level-item{
          :not(:last-child){
            margin-right: .75rem;
          }
        }
      }

      div.level-right {
        justify-content: flex-end;
      }

      div.level-right,
      div.level-left {
        display: flex;
        align-items: center;
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
      }
      
      &.level-item {
        align-items: center;
        display: flex;
        flex-basis: auto;
        flex-grow: 0;
        flex-shrink: 0;
        justify-content: center;
      }
    }

    // 当前模式样式
    div.main-schedule {
      background: rgba(0,0,0,.7);
      padding: 5px 10px 10px;
      margin: 0 -5px 15px;
      border-radius: 12px;
    }
    
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
      img {width:100%}
    }
  } */
