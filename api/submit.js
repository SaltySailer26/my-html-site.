export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // For now, just log it and return success
  console.log('Form submission:', { name, email, message });

  return res.status(200).json({ success: true, message: 'Form received!' });
}
