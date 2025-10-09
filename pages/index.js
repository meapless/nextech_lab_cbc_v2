import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <header className="header">
        <h1 style={{margin:0,fontSize:28}}>NexTech Lab — CBC Learning Hub</h1>
        <p style={{marginTop:6}}>PP1 & PP2 • Simple interactive activities</p>
      </header>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/learning-areas">Learning Areas</Link>
        <Link href="/about">About</Link>
      </nav>

      <main className="container">
        <section className="card" style={{textAlign:'center'}}>
          <h2 style={{color:'#064e3b'}}>Welcome Teachers & Parents</h2>
          <p className="small">A lightweight Next.js starter to showcase CBC activities for pre-primary learners (PP1 & PP2).</p>
          <div style={{marginTop:16}}>
            <Link href="/learning-areas"><button className="btn">Explore Learning Areas</button></Link>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <h3>Quick Preview</h3>
          <div className="grid">
            <div className="card">
              <img src="/images/language.svg" alt="language" style={{width:80}}/>
              <h4>Language</h4>
              <p className="small">Rhymes, listening, speaking and simple letter activities.</p>
            </div>

            <div className="card">
              <img src="/images/math.svg" alt="math" style={{width:80}}/>
              <h4>Mathematics</h4>
              <p className="small">Counting, shapes, sorting and comparing.</p>
            </div>

            <div className="card">
              <img src="/images/environment.svg" alt="env" style={{width:80}}/>
              <h4>Environment</h4>
              <p className="small">Plants, animals and weather topics.</p>
            </div>

            <div className="card">
              <img src="/images/creative.svg" alt="creative" style={{width:80}}/>
              <h4>Creative</h4>
              <p className="small">Drawing, songs and simple crafts.</p>
            </div>

            <div className="card">
              <img src="/images/religious.svg" alt="religious" style={{width:80}}/>
              <h4>Religious</h4>
              <p className="small">Good manners, caring and sharing activities.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>NexTech Lab • 2025</div>
        <div style={{fontSize:12, marginTop:6}}>Built for a 1-week Next.js group project</div>
      </footer>
    </div>
  )
}