import React, { useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: string
  lastActive: string
}

// Bad component: too many responsibilities, performance issues, a11y problems
export function UserDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(false)

  // No cleanup, no error handling, no abort controller
 useEffect(() => {
  setIsLoading(true)

  setTimeout(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        lastActive: '2026-05-13'
      },
      {
        id: '2',
        name: 'Alice Smith',
        email: 'alice@example.com',
        role: 'user',
        lastActive: '2026-05-12'
      },
      {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'user',
        lastActive: '2026-05-11'
      }
    ]

    setUsers(mockUsers)
    setIsLoading(false)
  }, 500)
}, [search, sortBy])

  // Filtering already-fetched data + re-fetching on search change = double work
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  // Expensive sort on every render, not memoized
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'email') return a.email.localeCompare(b.email)
    return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
  })

  // Inline handler recreated every render
  const handleExport = () => {
    const csv = sorted.map(u => `${u.name},${u.email},${u.role}`).join('')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    // Memory leak: URL never revoked
    window.open(url)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search..."
          style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', width: '300px' }}
        />
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
             style={{ cursor: 'pointer', padding: '8px 16px', background: '#007bff', color: 'white', borderRadius: '4px' }}>
          {theme === 'light' ? '🌙' : '☀️'}
        </div>
        <div onClick={handleExport}
             style={{ cursor: 'pointer', padding: '8px 16px', background: '#28a745', color: 'white', borderRadius: '4px' }}>
          Export CSV
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['name', 'email', 'lastActive'].map(field => (
          <div key={field}
               onClick={() => setSortBy(field)}
               style={{
                 padding: '4px 12px',
                 background: sortBy === field ? '#007bff' : '#e9ecef',
                 color: sortBy === field ? 'white' : 'black',
                 borderRadius: '20px',
                 cursor: 'pointer',
                 fontSize: '14px'
               }}>
            {field}
          </div>
        ))}
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Loading...</div>
      ) : (
        <div>
          {sorted.map(user => (
            <div key={user.id} style={{
              padding: '12px 16px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{user.name}</div>
                <div style={{ color: '#666', fontSize: '14px' }}>{user.email}</div>
              </div>
              <div style={{
                padding: '4px 8px',
                background: user.role === 'admin' ? '#dc3545' : '#6c757d',
                color: 'white',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                {user.role}
              </div>
          </div>
          ))}
        </div>
      )}
    </div>
  )
}