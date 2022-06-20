let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'development'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'production'
}

export { BASE_URL }
