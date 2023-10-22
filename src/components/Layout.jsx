import { useUser } from '../providers/UserProvider'
import '../styles/layout.css'

const Layout = () => {
  const { user } = useUser()

  return (
    <div className='layout'>
      <aside>

      </aside>
      <div className='container'>
        <header>
        header
        </header>
        <main>
          <p>{user?.nickName}</p>
          <p>{user?.email}</p>
        </main>
      </div>
    </div>
  )
}

export default Layout
