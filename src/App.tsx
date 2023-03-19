import './App.css'
import {useEffect, useLayoutEffect, useState} from "react";
import {CustomEmail, read, write} from "./firebase/email";

function App() {
  const [records, setRecords] = useState<CustomEmail[]>([])

  useLayoutEffect(() => {
    read().then((data) => {
      if (data) {
        setRecords(data)
      }
    })
  }, [])

  return (
    <div className="App">
      <button onClick={() => write({
        to: 'cinos81@gmail.com',
        from: 'cinos81@gmail.com',
        subject: '제목',
        text: '내용'
      })}>메일 보내기</button>
      <ul>
        {
          records.map(item => {
            return <li>{JSON.stringify(item)}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
