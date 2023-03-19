import {useQuery} from "react-query";
import './App.css'
import {CustomEmail, read, write} from "./firebase/email";

function App() {
  const {data} = useQuery<unknown, typeof Error, CustomEmail[]>(['records'], () => read())

  return (
    <div className="App">
      <button onClick={() => write({
        to: 'cinos81@gmail.com',
        from: 'cinos81@gmail.com',
        message: {
          subject: '제목',
          text: '내용'
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
