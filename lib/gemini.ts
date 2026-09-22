export async function callGemini(prompt: string, _systemInstruction = ''): Promise<string> {
  try {
    const response = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt }), signal: AbortSignal.timeout(25000) });
    const data = await response.json();
    return data.text || 'The assistant is unavailable right now. Please explore the project details or contact Hrudayesh directly.';
  } catch { return 'The assistant could not connect. Please try again or contact Hrudayesh directly.'; }
}
