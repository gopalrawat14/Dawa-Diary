export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    const apiKey = process.env.VITE_CLAUDE_API_KEY;

    if (!apiKey || apiKey === 'your_claude_api_key' || apiKey === 'your_api_key_here') {
      // Return mock response for demo purposes if API key is not set
      return res.status(200).json({
        text: "Yeh ek demo mock response hai kyunki Vercel pe API key set nahi hai. Aapke medical records surakshit hain."
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1000,
        system: "You are Dawa Diary, an AI health assistant for Indian users. Keep answers brief, use a mix of Hindi and English (Hinglish).",
        messages: [{ role: 'user', content: message }]
      })
    });

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.statusText}`);
    }

    const data = await response.json();
    return res.status(200).json({ text: data.content[0].text });

  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
