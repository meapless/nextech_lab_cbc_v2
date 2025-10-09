import Link from 'next/link'

export default function About(){
  return (
    <div>
      <header className="header">
        <h1 style={{margin:0}}>About NexTech Lab</h1>
      </header>

      <nav className="nav">
        <Link href="/"><a>Home</a></Link>
        <Link href="/learning-areas"><a>Learning Areas</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>

      <main className="container">
        <div className="card">
          <h2>Project</h2>
          <p className="small">NexTech Lab - CBC Learning Hub for PP1 & PP2. This starter is built for a 1-week Next.js group practical.</p>
          <h3 style={{marginTop:12}}>How to extend</h3>
          <ul>
            <li className="small">Add images and audio resources</li>
            <li className="small">Integrate Firebase for hosting resources</li>
            <li className="small">Add authentication for teachers</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        NexTech Lab • 2025
      </footer>
    </div>
  )
}