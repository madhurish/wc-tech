// CSV Handler utility for storing contact form submissions

export const csvHandler = {
  // Convert form data to CSV format
  formDataToCsv: (formData, existingCsv = '') => {
    const timestamp = new Date().toISOString()
    const csvRow = [
      timestamp,
      formData.name,
      formData.email,
      formData.subject,
      `"${formData.message.replace(/"/g, '""')}"` // Escape quotes in message
    ].join(',')

    // Add header if this is the first entry
    if (!existingCsv) {
      const header = 'Timestamp,Name,Email,Subject,Message'
      return header + '\n' + csvRow
    }

    return existingCsv + '\n' + csvRow
  },

  // Save CSV data to localStorage
  saveToLocalStorage: (csvData) => {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return false
      }
      localStorage.setItem('contact_submissions', csvData)
      return true
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
      return false
    }
  },

  // Get CSV data from localStorage
  getFromLocalStorage: () => {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return ''
      }
      return localStorage.getItem('contact_submissions') || ''
    } catch (error) {
      console.error('Failed to retrieve from localStorage:', error)
      return ''
    }
  },

  // Download CSV file
  downloadCsv: (filename = 'contact_submissions.csv') => {
    const csvData = csvHandler.getFromLocalStorage()
    if (!csvData) {
      alert('No submissions to download')
      return
    }

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  },

  // Get submission count
  getSubmissionCount: () => {
    const csvData = csvHandler.getFromLocalStorage()
    if (!csvData) return 0
    
    const lines = csvData.split('\n').filter(line => line.trim())
    return Math.max(0, lines.length - 1) // Subtract 1 for header
  },

  // Clear all submissions
  clearSubmissions: () => {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return false
      }
      localStorage.removeItem('contact_submissions')
      return true
    } catch (error) {
      console.error('Failed to clear submissions:', error)
      return false
    }
  }
}