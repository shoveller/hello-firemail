import {useQuery} from "react-query";
import './App.css'
import {CustomEmail, read, write} from "./firebase/email";

function App() {
  const {data} = useQuery<unknown, typeof Error, CustomEmail[]>(['records'], () => read())

  return (
    <div className="App">
      <button onClick={() => write({
        to: 'cinos81@gmail.com',
        from: 'test@knccapital.co.nz',
        message: {
          subject: '파이어베이스 메일 플러그인을 이용해서 메일 보내기',
          text: '메일 내용'
        }
      })}>메일 보내기
      </button>
      <ul>
        {
          data?.map(item => {
            return <li key={item.id}>{JSON.stringify(item)}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
