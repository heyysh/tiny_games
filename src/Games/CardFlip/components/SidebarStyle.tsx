import styled from 'styled-components';

type TSidebarStyleProps = {
  isPlaying: boolean;
}


const Main = styled.div`
  margin: 10px;
`

const StartButton = styled.button<TSidebarStyleProps>`
  width: 200px;
  height: 48px;
  font-size: 24px;
  margin: 5px;
  cursor: pointer;
  background-color: ${props => props.isPlaying ? '#009e95' : '#0c9df7'} ;
  color: white;
  border: 0px;
  border-radius: 5px;
`

const RecordsContainer = styled.div`
  margin: 20px 5px 5px 5px;
  font-size: 18px;
  & > ul {
    padding-left: 24px;
    margin: 10px 0px;
  }

  & li {
    margin: 5px 0px;
  }
`

const Title = styled.div`
  font-size: 20px;
  margin: 10px 0px;
  font-weight: normal;
`

const Record = styled.li`
  color: #414141;
`

const RecordTimeout = styled(Record)`
  color: red;
`

export { Main, StartButton, RecordsContainer, Title, Record, RecordTimeout };
