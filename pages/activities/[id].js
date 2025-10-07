import { useRouter } from 'next/router'
import Link from 'next/link'

const activitiesData = {
  language: [
    'Sing ABC song together',
    'Listen to a short story and answer questions',
    'Identify first letters of objects'
  ],
  math: [
    'Count 1 to 10 using fingers',
    'Show different shapes (circle, square)',
    'Sort objects by size'
  ],
  environment: [
    'Name three animals',
    'Talk about weather today',
    'Plant a seed in a cup'
  ],
  creative: [
    'Draw your home',
    'Color a simple picture',
    'Clap and sing a short rhyme'
  ],
  religious: [
    'Say thank you to someone',
    'Share a toy with a friend',
    'Practice a short prayer of thanks'
  ]
}

export default function Activities(){
  const router = useRouter()
  const { id } = router.query
  const items = activitiesData[id] || []

  return (
    <div>
      <header className="header">
        <h1 style={{margin:0}}>{id ? id.toUpperCase() : 'Activities'}</h1>
      </header>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/learning-areas">Learning Areas</Link>
        <Link href="/about">About</Link>
      </nav>

      <main className="container">
        <div className="card">
          <h2 style={{color:'#064e3b', textTransform:'capitalize'}}>{id} Activities</h2>
          {items.length > 0 ? (
            <ul>
              {items.map((it, i) => <li key={i} style={{marginBottom:8}}>🌟 {it}</li>)}
            </ul>
          ) : (
            <p className="small">No activities available yet.</p>
          )}
        </div>
      </main>

      <footer className="footer">
        NexTech Lab • PP1 & PP2
      </footer>
    </div>
  )
}