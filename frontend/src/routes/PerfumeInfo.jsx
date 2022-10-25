import styled from 'styled-components'
import eremia from '../assets/eremia.jpeg'

export default function PerfumeInfo() {
  return (
    <PerfumeInfoBase>
      <PerfumeTitle></PerfumeTitle>
      <PerfumeInner>
        <PerfumeNotice style={{'margin-right': '50px'}}>
          <PerfumeImg>
            <img src={eremia} alt="eremia"/>
          </PerfumeImg>
          <PerfumeExp>
            <ExpTitle>
              <h1>Eremia</h1>
              <span> → </span>
            </ExpTitle>
            <p>
            풍성하고, 강렬하며, 우수한 지속력을 자랑하는 베르가못 향은 자연의 무성한 숲을 연상시킵니다.
            밝은 시트러스 노트로 시작하여 따뜻한 숲내음으로 이어지는 활기차고 상쾌한 향수입니다.
            </p>
            <h4> Top notes <br></br>
              <span>Yuzu, Bergamot, Grapefruit</span>
            </h4>
            <h4> Middle notes <br></br>
              <span>Mimosa, Green Tea, Guaiacwood</span>
            </h4>
            <h4> Base notes <br></br>
              <span>Galbanum, Iris, Patchouli</span>
            </h4>
          </PerfumeExp>
        </PerfumeNotice>

        <PerfumeNotice style={{'margin-left': '80px'}}>
          <PerfumeExp>
            <ExpTitle>
              <span>  ← </span>
              <h1>Eremia</h1>
            </ExpTitle>
            <p>tjfaudtjjafdhljd</p>
            <h4> Top notes <br></br>
              <span>Yuzu, Bergamot, Grapefruit</span>
            </h4>
            <h4> Middle notes <br></br>
              <span>Mimosa, Green Tea, Guaiacwood</span>
            </h4>
            <h4> Base notes <br></br>
              <span>Galbanum, Iris, Patchouli</span>
            </h4>
          </PerfumeExp>
          <PerfumeImg>
            <img src={eremia} alt="eremia"/>
          </PerfumeImg>
        </PerfumeNotice>

      </PerfumeInner>
    </PerfumeInfoBase>
  )
}


const PerfumeInfoBase = styled.div `
background-color: #ddd6d0;
// height: 100vh;
// font-family: 'Noto Sans KR';
`

const PerfumeTitle = styled.div`
width: 100%;
height: 200px;
`

const PerfumeInner = styled.div `
width: 1100px;
height: 100%;
margin: 0 auto;
position: relative;
`

const PerfumeNotice = styled.div`
margin-top: 50px;
height: 450px;
display: flex;
`

const PerfumeImg = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
> img {
  width: 80%;
  height: 100%;
}
`

const PerfumeExp = styled.div`
flex: 1;

> p {
  display: block;
  margin-top: 25px;
  padding: 30px 0;
  border-bottom: 2px solid black;
}

>h4 {
  display: block;
  margin-top: 12px;
  border-bottom: 1px solid #9f9f9f;
  > span {
    display: block;
    padding: 10px 0 5px 0;
    color: #616161;
  }
}
`

const ExpTitle = styled.div`
  margin-top: 15px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;

  > h1 {
    display: block;
  }
  > span {
    display: block;
  }
`