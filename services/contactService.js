// Firebase service for contact form submissions
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  deleteDoc,
  doc,
  getCountFromServer
} from 'firebase/firestore'
import { db } from '../lib/firebase'

const CONTACT_COLLECTION = 'contact_submissions'

export const contactService = {
  // Submit a new contact form
  submitContactForm: async (formData) => {
    try {
      const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
        status: 'new', // new, read, replied
        ipAddress: '', // You can add IP tracking if needed
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : ''
      })
      
      console.log('Contact form submitted with ID: ', docRef.id)
      return { success: true, id: docRef.id }
    } catch (error) {
      console.error('Error submitting contact form: ', error)
      return { success: false, error: error.message }
    }
  },

  // Get all contact submissions (for admin panel)
  getAllSubmissions: async () => {
    try {
      const q = query(
        collection(db, CONTACT_COLLECTION),
        orderBy('timestamp', 'desc')
      )
      const querySnapshot = await getDocs(q)
      
      const submissions = []
      querySnapshot.forEach((doc) => {
        submissions.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp
        })
      })
      
      return { success: true, data: submissions }
    } catch (error) {
      console.error('Error getting submissions: ', error)
      return { success: false, error: error.message }
    }
  },

  // Get recent submissions (for admin panel)
  getRecentSubmissions: async (limitCount = 10) => {
    try {
      const q = query(
        collection(db, CONTACT_COLLECTION),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      )
      const querySnapshot = await getDocs(q)
      
      const submissions = []
      querySnapshot.forEach((doc) => {
        submissions.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp
        })
      })
      
      return { success: true, data: submissions }
    } catch (error) {
      console.error('Error getting recent submissions: ', error)
      return { success: false, error: error.message }
    }
  },

  // Get submission count
  getSubmissionCount: async () => {
    try {
      const coll = collection(db, CONTACT_COLLECTION)
      const snapshot = await getCountFromServer(coll)
      return { success: true, count: snapshot.data().count }
    } catch (error) {
      console.error('Error getting submission count: ', error)
      return { success: false, error: error.message }
    }
  },

  // Delete a submission
  deleteSubmission: async (submissionId) => {
    try {
      await deleteDoc(doc(db, CONTACT_COLLECTION, submissionId))
      return { success: true }
    } catch (error) {
      console.error('Error deleting submission: ', error)
      return { success: false, error: error.message }
    }
  },

  // Export submissions as CSV
  exportAsCSV: async () => {
    try {
      const result = await contactService.getAllSubmissions()
      if (!result.success) {
        return result
      }

      const submissions = result.data
      
      // Create CSV header
      const headers = ['Timestamp', 'Name', 'Email', 'Subject', 'Message', 'Status']
      const csvRows = [headers.join(',')]

      // Add data rows
      submissions.forEach(submission => {
        const row = [
          submission.timestamp ? submission.timestamp.toISOString() : '',
          `"${submission.name?.replace(/"/g, '""') || ''}"`,
          submission.email || '',
          `"${submission.subject?.replace(/"/g, '""') || ''}"`,
          `"${submission.message?.replace(/"/g, '""') || ''}"`,
          submission.status || 'new'
        ]
        csvRows.push(row.join(','))
      })

      const csvContent = csvRows.join('\n')
      
      // Create and download file
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', `wishcoin_submissions_${new Date().toISOString().split('T')[0]}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }

      return { success: true }
    } catch (error) {
      console.error('Error exporting CSV: ', error)
      return { success: false, error: error.message }
    }
  }
}