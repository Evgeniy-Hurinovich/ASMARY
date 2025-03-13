import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ibameynehrwshrtlabjv.supabase.co'
//выше мое
// export const supabaseUrl = 'https://dclaevazetcjjkrzczpc.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYW1leW5laHJ3c2hydGxhYmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MzkyMDEsImV4cCI6MjA1NjQxNTIwMX0.O7Fdae28PqIb0bHreuaumL3tCzVRIHJJq3I-fLQ5QdY'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

// закомитенные надо раскомититить и наоборот закомитить другое после создания учетной записи в базе
