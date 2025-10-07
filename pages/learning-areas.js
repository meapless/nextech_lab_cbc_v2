import Link from 'next/link'

const areas = [
  { id: 'language', title: 'Language Activities', desc: 'Rhymes, stories, and listening games.' },
  { id: 'math', title: 'Mathematical Activities', desc: 'Counting, shapes, and number play.' },
  { id: 'environment', title: 'Environmental Activities', desc: 'Plants, animals, and our surroundings.' },
  { id: 'creative', title: 'Creative & Psychomotor', desc: 'Drawing, singing and movement.' },
  { id: 'religious', title: 'Religious Activities', desc: 'Good behavior and caring.' }
]

export default function LearningAreas(){
  return (
    <div>
      <header className="header">
        <h1 style={{margin:0}}>Learning Areas (PP1 & PP2)</h1>
      </header>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/learning-areas">Learning Areas</Link>
        <Link href="/about">About</Link>
      </nav>
      <main className="container">
        <div className="grid">
          {areas.map(area => (
            <div key={area.id} className="card">
              <img src={`/images/${area.id}.svg`} alt={area.id} style={{width:64}}/>
              <h3 style={{color:'#064e3b'}}>{area.title}</h3>
              <p className="small">{area.desc}</p>
              <div style={{marginTop:10}}>
                <Link href={`/activities/${area.id}`} legacyBehavior>
                  <button className="btn">View Activities</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        NexTech Lab • PP1 & PP2
      </footer>
    </div>
  );
}