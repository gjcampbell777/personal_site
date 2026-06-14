// In your frontend
const API_BASE_URL = 'https://your-api-id.execute-api.region.amazonaws.com/prod'

// Call Go function
const goResponse = await fetch(`${API_BASE_URL}/go/health`)

// Call Python function
const pythonResponse = await fetch(`${API_BASE_URL}/python/data`, {
  method: 'POST',
  body: JSON.stringify({ data: 'example' })
})

// Call Rust function
const rustResponse = await fetch(`${API_BASE_URL}/rust/process`, {
  method: 'POST',
  body: JSON.stringify({ input: 'process this' })
})
