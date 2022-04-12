import styled from 'styled-components'
import { gears } from '../interfaces/merchandises'

import merchandiseBackGroundImg from '../assets/img/bg-circles.png'

export default function GearShowCase(props: { gear: gears }) {
  const { gear } = props
  return (
    <Body className="column">
      <div className="merchandise-box font-splatoon2">
        <div className="band">
          <div className="img">
            <img src={`https://splatoon2.ink/assets/splatnet${gear.gear.brand.image}`} alt="BrandIcon" />
          </div>
        </div>
        <div className="skills flex-column">
          <div className="main-skill main-skill-bg">
            <img src={`https://splatoon2.ink/assets/splatnet${gear.skill.image}`} alt="Main-Skill-icon" />
          </div>
          <div className="sub top-gap">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFoUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///7CwsPDw8NDQ0ODg4BAQEDQ0NOzs7Li4uIyMjEpKSmxsbNzc3AUFBevr62RkZBEREU9PTwgICFNTU+3t7aqqqqurq66urs/PzyIiIm1tbZubm9bW1nBwcDk5OQkJCYiIiLq6usLCwhUVFfX19Y+Pj8nJya2trVhYWBQUFAsLCw8PDyAgIHl5eSYmJvLy8r6+vt/f3y8vL2NjYywsLMbGxhISEvT09J6enh0dHdnZ2Xh4eEBAQAYGBnd3d0dHRzo6OkZGRoWFhZycnKysrE1NTTY2Ng4ODgQEBHp6ekRERPr6+ktLS7S0tP39/bKyslBQUHV1dVlZWTw8PGBgYBYWFmdnZ/n5+fz8/AEBAdimX9cAAAAddFJOUwAt9wYKboz06M4D8WQYnbsUf9XfH12vhwE/3JjBvGSjyAAAAldJREFUWMOtl2df2zAQh5WExE6AJDaxjWNkissoUGYn3XtC995779L269ekkexKd46F8rzT5e7/i23dIgSh5XiubRqUGqbtek6LqDDqB20q0A780ZzhTWuEgoxYzRzhwxWDohiV4R7htfIgzWSwXMuKL1RpT6oFPH6oSHNQHELCS3Wak3oJih9o0Nw0BoD4MarAmKRQalAlGuJT1KkideH9U2X++xaForpAMXUfalW6DarJnSzTbVHm+QPd/wtHNmeen31xZ2bh1TKWFyyzKvJvL6ffh5xTe5/CCpVu/kv5+/N4KHDzGpjd/+qDJdpPzoUSv75BClanfkn1ZzoE+LQE1aitKueL1l0hyOoioODHAoFo/AwLhG8BgSAWEOvvw9uIwBwg0I7rv2ibDDHWAYUWcUTTCipwDhBwiCeaZnnA7pX5u2spgVlAwCOuaDrMA97Fpz8nEoEFQMAltmi6zvzvdY5fE4HvgIBNTNH0gfnv6xwfJU80DwiYREqE5Uu3dsYc7R6vcIFjYDqQHjmfXMvV86BDD4EDU1zgB+xBjKz4N2d4/B6kX8svMc1lHh9dhD1M+TOmWNxg8b+fIC62fJFSHOR/4DTm4spXOcU4i596jbl4cjKl+Lijy33UxZHTWY2WXFCUaEMlTYUAKqoJ+6MoOjQRM4l5+GBZ50TsKywhDp2yLjcWzlUm8AVxsJDWxphgAo+RRGiizVUQeJDZXOH2vsWz8S43stu79oChP+JoD1n6Y57+oKk/6moP2/rjvv7Cob/y9GHp0l/79BfPPqy+fVi+1db/v3V0fr1ffe7ZAAAAAElFTkSuQmCC"
              alt="locked-skill"
            />
          </div>
          <div className="sub top-gap">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFoUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///7CwsPDw8NDQ0ODg4BAQEDQ0NOzs7Li4uIyMjEpKSmxsbNzc3AUFBevr62RkZBEREU9PTwgICFNTU+3t7aqqqqurq66urs/PzyIiIm1tbZubm9bW1nBwcDk5OQkJCYiIiLq6usLCwhUVFfX19Y+Pj8nJya2trVhYWBQUFAsLCw8PDyAgIHl5eSYmJvLy8r6+vt/f3y8vL2NjYywsLMbGxhISEvT09J6enh0dHdnZ2Xh4eEBAQAYGBnd3d0dHRzo6OkZGRoWFhZycnKysrE1NTTY2Ng4ODgQEBHp6ekRERPr6+ktLS7S0tP39/bKyslBQUHV1dVlZWTw8PGBgYBYWFmdnZ/n5+fz8/AEBAdimX9cAAAAddFJOUwAt9wYKboz06M4D8WQYnbsUf9XfH12vhwE/3JjBvGSjyAAAAldJREFUWMOtl2df2zAQh5WExE6AJDaxjWNkissoUGYn3XtC995779L269ekkexKd46F8rzT5e7/i23dIgSh5XiubRqUGqbtek6LqDDqB20q0A780ZzhTWuEgoxYzRzhwxWDohiV4R7htfIgzWSwXMuKL1RpT6oFPH6oSHNQHELCS3Wak3oJih9o0Nw0BoD4MarAmKRQalAlGuJT1KkideH9U2X++xaForpAMXUfalW6DarJnSzTbVHm+QPd/wtHNmeen31xZ2bh1TKWFyyzKvJvL6ffh5xTe5/CCpVu/kv5+/N4KHDzGpjd/+qDJdpPzoUSv75BClanfkn1ZzoE+LQE1aitKueL1l0hyOoioODHAoFo/AwLhG8BgSAWEOvvw9uIwBwg0I7rv2ibDDHWAYUWcUTTCipwDhBwiCeaZnnA7pX5u2spgVlAwCOuaDrMA97Fpz8nEoEFQMAltmi6zvzvdY5fE4HvgIBNTNH0gfnv6xwfJU80DwiYREqE5Uu3dsYc7R6vcIFjYDqQHjmfXMvV86BDD4EDU1zgB+xBjKz4N2d4/B6kX8svMc1lHh9dhD1M+TOmWNxg8b+fIC62fJFSHOR/4DTm4spXOcU4i596jbl4cjKl+Lijy33UxZHTWY2WXFCUaEMlTYUAKqoJ+6MoOjQRM4l5+GBZ50TsKywhDp2yLjcWzlUm8AVxsJDWxphgAo+RRGiizVUQeJDZXOH2vsWz8S43stu79oChP+JoD1n6Y57+oKk/6moP2/rjvv7Cob/y9GHp0l/79BfPPqy+fVi+1db/v3V0fr1ffe7ZAAAAAElFTkSuQmCC"
              alt="locked-skill"
            />
          </div>
        </div>
        <div className="remaining-time squid">还剩2分钟</div>
        <div className="gear-image">
          <div className="image">
            <img src={`https://splatoon2.ink/assets/splatnet${gear.gear.image}`} alt="cloths" />
          </div>
        </div>
        <div className="gear-name">
          <div className="overlay">
            <div className="info-overlay original-gear">
              <span className="title">Original Gear</span>
              <div className="skill-container">
                <div className="skills flex-row">
                  <div className="main-skill main-skill-bg">
                    <img
                      src={`https://splatoon2.ink/assets/splatnet${gear.original_gear.skill.image}`}
                      alt="Main-Skill-icon"
                    />
                  </div>
                  <div className="sub">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFoUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///7CwsPDw8NDQ0ODg4BAQEDQ0NOzs7Li4uIyMjEpKSmxsbNzc3AUFBevr62RkZBEREU9PTwgICFNTU+3t7aqqqqurq66urs/PzyIiIm1tbZubm9bW1nBwcDk5OQkJCYiIiLq6usLCwhUVFfX19Y+Pj8nJya2trVhYWBQUFAsLCw8PDyAgIHl5eSYmJvLy8r6+vt/f3y8vL2NjYywsLMbGxhISEvT09J6enh0dHdnZ2Xh4eEBAQAYGBnd3d0dHRzo6OkZGRoWFhZycnKysrE1NTTY2Ng4ODgQEBHp6ekRERPr6+ktLS7S0tP39/bKyslBQUHV1dVlZWTw8PGBgYBYWFmdnZ/n5+fz8/AEBAdimX9cAAAAddFJOUwAt9wYKboz06M4D8WQYnbsUf9XfH12vhwE/3JjBvGSjyAAAAldJREFUWMOtl2df2zAQh5WExE6AJDaxjWNkissoUGYn3XtC995779L269ekkexKd46F8rzT5e7/i23dIgSh5XiubRqUGqbtek6LqDDqB20q0A780ZzhTWuEgoxYzRzhwxWDohiV4R7htfIgzWSwXMuKL1RpT6oFPH6oSHNQHELCS3Wak3oJih9o0Nw0BoD4MarAmKRQalAlGuJT1KkideH9U2X++xaForpAMXUfalW6DarJnSzTbVHm+QPd/wtHNmeen31xZ2bh1TKWFyyzKvJvL6ffh5xTe5/CCpVu/kv5+/N4KHDzGpjd/+qDJdpPzoUSv75BClanfkn1ZzoE+LQE1aitKueL1l0hyOoioODHAoFo/AwLhG8BgSAWEOvvw9uIwBwg0I7rv2ibDDHWAYUWcUTTCipwDhBwiCeaZnnA7pX5u2spgVlAwCOuaDrMA97Fpz8nEoEFQMAltmi6zvzvdY5fE4HvgIBNTNH0gfnv6xwfJU80DwiYREqE5Uu3dsYc7R6vcIFjYDqQHjmfXMvV86BDD4EDU1zgB+xBjKz4N2d4/B6kX8svMc1lHh9dhD1M+TOmWNxg8b+fIC62fJFSHOR/4DTm4spXOcU4i596jbl4cjKl+Lijy33UxZHTWY2WXFCUaEMlTYUAKqoJ+6MoOjQRM4l5+GBZ50TsKywhDp2yLjcWzlUm8AVxsJDWxphgAo+RRGiizVUQeJDZXOH2vsWz8S43stu79oChP+JoD1n6Y57+oKk/6moP2/rjvv7Cob/y9GHp0l/79BfPPqy+fVi+1db/v3V0fr1ffe7ZAAAAAElFTkSuQmCC"
                      alt="locked-skill"
                    />
                  </div>
                  <div className="sub">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFoUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///7CwsPDw8NDQ0ODg4BAQEDQ0NOzs7Li4uIyMjEpKSmxsbNzc3AUFBevr62RkZBEREU9PTwgICFNTU+3t7aqqqqurq66urs/PzyIiIm1tbZubm9bW1nBwcDk5OQkJCYiIiLq6usLCwhUVFfX19Y+Pj8nJya2trVhYWBQUFAsLCw8PDyAgIHl5eSYmJvLy8r6+vt/f3y8vL2NjYywsLMbGxhISEvT09J6enh0dHdnZ2Xh4eEBAQAYGBnd3d0dHRzo6OkZGRoWFhZycnKysrE1NTTY2Ng4ODgQEBHp6ekRERPr6+ktLS7S0tP39/bKyslBQUHV1dVlZWTw8PGBgYBYWFmdnZ/n5+fz8/AEBAdimX9cAAAAddFJOUwAt9wYKboz06M4D8WQYnbsUf9XfH12vhwE/3JjBvGSjyAAAAldJREFUWMOtl2df2zAQh5WExE6AJDaxjWNkissoUGYn3XtC995779L269ekkexKd46F8rzT5e7/i23dIgSh5XiubRqUGqbtek6LqDDqB20q0A780ZzhTWuEgoxYzRzhwxWDohiV4R7htfIgzWSwXMuKL1RpT6oFPH6oSHNQHELCS3Wak3oJih9o0Nw0BoD4MarAmKRQalAlGuJT1KkideH9U2X++xaForpAMXUfalW6DarJnSzTbVHm+QPd/wtHNmeen31xZ2bh1TKWFyyzKvJvL6ffh5xTe5/CCpVu/kv5+/N4KHDzGpjd/+qDJdpPzoUSv75BClanfkn1ZzoE+LQE1aitKueL1l0hyOoioODHAoFo/AwLhG8BgSAWEOvvw9uIwBwg0I7rv2ibDDHWAYUWcUTTCipwDhBwiCeaZnnA7pX5u2spgVlAwCOuaDrMA97Fpz8nEoEFQMAltmi6zvzvdY5fE4HvgIBNTNH0gfnv6xwfJU80DwiYREqE5Uu3dsYc7R6vcIFjYDqQHjmfXMvV86BDD4EDU1zgB+xBjKz4N2d4/B6kX8svMc1lHh9dhD1M+TOmWNxg8b+fIC62fJFSHOR/4DTm4spXOcU4i596jbl4cjKl+Lijy33UxZHTWY2WXFCUaEMlTYUAKqoJ+6MoOjQRM4l5+GBZ50TsKywhDp2yLjcWzlUm8AVxsJDWxphgAo+RRGiizVUQeJDZXOH2vsWz8S43stu79oChP+JoD1n6Y57+oKk/6moP2/rjvv7Cob/y9GHp0l/79BfPPqy+fVi+1db/v3V0fr1ffe7ZAAAAAElFTkSuQmCC"
                      alt="locked-skill"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="info-overlay common-ability">
              <span className="title">Common gear ability</span>
              <div className="skill-container">
                <div className="skills flex-row">
                  <div className="main-skill main-skill-bg">
                    <img
                      src={`https://splatoon2.ink/assets/splatnet${gear.gear.brand.frequent_skill.image}`}
                      alt="Main-Skill-icon"
                    />
                  </div>
                  <div style={{ marginLeft: '0.25rem' }}>{gear.gear.brand.frequent_skill.name}</div>
                </div>
              </div>
            </div>
          </div>
          <span>{gear.gear.name}</span>
        </div>
        <div className="bottom-bar squid">
          <img
            src="data:image/png;base64,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"
            alt="cash"
            className="cash
            "
          />
          <div className="cost">{gear.price}</div>
        </div>
      </div>
    </Body>
  )
}

const Body = styled.div`
  flex: none;
  padding: 0.7rem;
  div.merchandise-box {
    width: 160px;
    background-image: url(${merchandiseBackGroundImg});
    background-position: 50% top;
    background-size: 240px 120px;

    position: relative;
    -webkit-mask-size: 500px 800px;
    mask-size: 500px 800px;
    background-color: #f5f5f5;
    color: #0a0a0a;
    border-radius: 15px;
    padding: 38px 10px 0 10px;
    transition: transform 0.2s ease;

    :hover {
      transform: rotate(-1.4deg) scale(1.05);
      div.overlay {
        opacity: 1;
      }
    }

    -webkit-mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
    mask-image: url(data:image/png;base64,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1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR5+gjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dPezTAQkAAACAoP+vPaITguro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRJ6ijV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvY5eHb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06uh19Oro1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0aujV0evo1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb06eh29Onp19Oro1dGro1dHr45eR6+OXh29Onp19Oro1dGro9fRq6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19Dp6dfTq6NXRq6NXR6+OXh29jl4dvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6PX0aujV0evjl4dvTp6dfTq6HX06ujV0aujV0evjl4dvTp6HX2COnp19Oro1dGro1dHr45eHb2OXh29Onp19Oro1dGro1dHr6NXR6+OXh29Onp19Oro1dHr6NXRq6NXR6+OXh29Onp19OrodfTq6NXRq6NXR6+OXh29OnodvTp6dfTq6NXRq6NXR6+OXkevjl4dvTp6dfTq6NXRq6NXR6+jV0evjl4dvTp6dfTq6NXR6+jV0aujV0evjl4dvTp6dfQ6enX06ujV0aujV0evjl4dvTp6Hb06enX06ujV0aujV0evjl5Hr45eHb06enX06ujV0auj19Gro1dHr45eHb06enX06ujV0evo1dGro1dHr45eHb06enX0Onp19Oro1dGro1dHr45eHb2OXh29Onp19OrolfbpQAAAAABAkL/1BBuUQ6IDogOiA6KD6IDogOiA6IDogOiA6IDoIDogOiA6IDogOiA6IDogOogOiA6IDogOiA6IDogOiA6IDqIDogOiA6IDogOiA6IDooPogOiA6IDogOiA6IDowAg+YFmyhQ+ZRAAAAABJRU5ErkJggg==);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 600px 960px;
    mask-size: 600px 960px;
    -webkit-mask-position: center top;
    mask-position: center top;
  }

  img {
    width: 100%;
    height: auto;
  }

  .squid {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADiBAMAAAChPgbkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURRcXF0dwTBUVFRYWFgAAABoaGhkZGRUVFRgYGAAAAAAAAB4eHiQkJBISEkRDNy8AAAAOdFJOUxYAGBcDEwoMFQUBEQcOBwHpdgAAAjdJREFUeNrt271NBDEUReGnjUlGIoGICCKkbYIKqIASqIEm6IGMDiiBjtj5XXvGz9k9Cde5dfTFvo6Xc6TnacjP/Xd+7/TbuRi3r52b752bXw/5xedecaCRMdDIGGjkpQgjL0UYORZZ5FhkkVMRRU5FFDkXSeRcJJFLEUQuRRC5FjnkWuSQWxFDbkUMeS1SyGuRQhZFCFkUIWRZZJBlkUFWRQRZFRFkXSSQdZFA7ooAclcEkPuiHrkv6pGHohx5KMqRx6IaeSyqkY2iGNkoipGtohbZKmqRzaIU2SxKke2iEtkuKpFJUYhMikJkVtQhs6IOmRZlyLQoQ+ZFFTIvqpCdogjZKYqQvaIGGW80Mh5pZJxoZBhppJFGGmmkkUYaaaSRRhpppJFGGmmkkUYaaeR/Rp5pZHzQyPikkXFHI2OgkTHQyBho5KUII8f3RxY5Flnk9MaKIqciipzfkUnkXCSRy1s5iFyKIHLdA3DItcght80DhtyKGPK666CQ1yKFLLYrELIoQshyn8MgyyKDrDZICLIqIsh6Z0Ug6yKB3G3JAOSuCCD3ezk9cl/UIw+bQDnyUJQjj7tHNfJYVCMb204xslEUI1v7VS2yVdQimxtdKbJZlCLbO2Qlsl1UIpOttRCZFIXIbE+uQ2ZFHTLdzMuQaVGGzP8FqJB5UYXs/H0QITtFEbL3v0OD7BU1yPihkXFDIwNHhpFGGmmkkUYaaaSRRhpppJFGGmmkkUYaaaSRRhoJIgNH/gHUGcb6oO4YfwAAAABJRU5ErkJggg==);
    background-position: top;
    background-size: 80px 80px;
  }

  div.band {
    position: absolute;
    top: 6px;
    left: 6px;
    div.img {
      height: 32px;
      width: 32px;
    }
  }
  div.skills {
    display: flex;
    &.flex-column {
      position: absolute;
      top: 6px;
      right: 6px;
      flex-direction: column;
      align-items: center;
    }
    &.flex-row {
      align-items: center;
      flex-direction: row;
    }
    div.main-skill {
      height: 32px;
      width: 32px;
      &.main-skill-bg {
        display: inline-block;
        line-height: 0;
        vertical-align: middle;
        padding: 3px;
        background: #000;
        border-radius: 50%;
      }
    }
    div.sub {
      height: 25px;
      width: 25px;
      &.top-gap {
        margin-top: 0.2rem;
      }
    }
  }
  div.remaining-time {
    color: #fff;
    background-color: #460fc8;
    display: inline-block;
    padding: 2px 48px 2px 20px;
    margin: 0 0 0 -23px;
    line-height: 1.5;
    padding-right: 1.7rem;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABc4AAABCCAMAAABZ5LUXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAgoOAQwNBAgPCQYDCwcFCYYNRKAAACXUlEQVR42u3dzZKiMBSAUUB+EsSW93/aGQWkUTe946bOWU16mcVXKecmVDMAgeTuWu3SZb6k5Z+2BiCY5lXz/rnu5BwgpPt2Nl/XSc4BIhrXnOd13cs5QETLryvV9PqDnAMEPp3Xh7zbFoBottmWy++1bQEIptsGW4Zl3ZtsAYgnj+1rUHHqHnVv5RzgxG4pXYcPU3XQDnXlGhHAeXV19Te2DOCE+qqSc4D47nIOUIJKzgHkHICTqOUcoASjnAMU4SrnAEXorrWcA5TY959Xusc856aVc4CY+rXgt+cqT3IOENPyldDrdlyXc4CY8q/D+fw2nG53AOJ4hruTc4ASTufdYSXnAOEsv52nw0rOAaJZJ1vafjmc13IOEFBO26R528yf37ewQQCn1aX9q3LHeg+tW6EAUY7jg0v+AAUYvNkCUIDei4oAJRjlHKAESc4BSuDHFoAy+K9QgCK8PWgu5wBRNffhi7cbRPXyB7sFEC/z+xXR9vH6+ePCv10BiCe/Tujrc1yTnANEtA2l7x+asycAAW1TjPuXiewJQERrzi9yDlDS6TzLOUBE2wsA+4fm7AlAwMP522TL/7VNAYjmkvabRG3Kc25ac+cA5432lxuhtUv+ALE0rRcVAQo4m1eVnAPE9yPnACUY5BxAzgE4iaucA5Sgk3OAIhhUBChDblL6fnvo62UiGwYQwGUfXEz5sJRzgFC2NxTHZTnKOUBMy2/p07as5RwgpOHwwPnHtVEbBBAy50nOAUrI+SDnABGtTyxOx6WcA8SSh+NkyyDnAAFj3uyDLPfbPPcfNf8H6jx4r62DsMUAAAAASUVORK5CYII=);
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABc4AAABCCAMAAABZ5LUXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAgoOAQwNBAgPCQYDCwcFCYYNRKAAACXUlEQVR42u3dzZKiMBSAUUB+EsSW93/aGQWkUTe946bOWU16mcVXKecmVDMAgeTuWu3SZb6k5Z+2BiCY5lXz/rnu5BwgpPt2Nl/XSc4BIhrXnOd13cs5QETLryvV9PqDnAMEPp3Xh7zbFoBottmWy++1bQEIptsGW4Zl3ZtsAYgnj+1rUHHqHnVv5RzgxG4pXYcPU3XQDnXlGhHAeXV19Te2DOCE+qqSc4D47nIOUIJKzgHkHICTqOUcoASjnAMU4SrnAEXorrWcA5TY959Xusc856aVc4CY+rXgt+cqT3IOENPyldDrdlyXc4CY8q/D+fw2nG53AOJ4hruTc4ASTufdYSXnAOEsv52nw0rOAaJZJ1vafjmc13IOEFBO26R528yf37ewQQCn1aX9q3LHeg+tW6EAUY7jg0v+AAUYvNkCUIDei4oAJRjlHKAESc4BSuDHFoAy+K9QgCK8PWgu5wBRNffhi7cbRPXyB7sFEC/z+xXR9vH6+ePCv10BiCe/Tujrc1yTnANEtA2l7x+asycAAW1TjPuXiewJQERrzi9yDlDS6TzLOUBE2wsA+4fm7AlAwMP522TL/7VNAYjmkvabRG3Kc25ac+cA5432lxuhtUv+ALE0rRcVAQo4m1eVnAPE9yPnACUY5BxAzgE4iaucA5Sgk3OAIhhUBChDblL6fnvo62UiGwYQwGUfXEz5sJRzgFC2NxTHZTnKOUBMy2/p07as5RwgpOHwwPnHtVEbBBAy50nOAUrI+SDnABGtTyxOx6WcA8SSh+NkyyDnAAFj3uyDLPfbPPcfNf8H6jx4r62DsMUAAAAASUVORK5CYII=);
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-mask-position: right center;
    mask-position: right center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }
  div.gear-image {
    margin: 0 25px;
  }
  div.gear-name {
    text-align: center;
    div.overlay {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 45px;
      margin: 0 6px;
      opacity: 0;
      transition: 0.3s ease;

      div.info-overlay {
        margin-top: 2px;
        background: hsla(0, 0%, 96.1%, 0.9);
        border-radius: 10px;
        padding: 2px;
        span.title {
          display: block;
          text-align: left;
          font-size: 0.75rem;
        }
        div.main-skill {
          height: 24px;
          width: 24px;
        }
        div.sub {
          margin-left: 7px;
          width: 18px;
        }
      }
    }
  }
  div.bottom-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1dd6ad;
    margin-top: 5px;
    margin-left: -10px;
    margin-right: -10px;
    padding: 4px 10px;
    color: #f5f5f5;
    img.cash {
      width: 24px;
      height: 24px;
      vertical-align: bottom;
    }
    div.cost {
      display: inline-block;
      margin: 0 0.25rem;
    }
  }
`
