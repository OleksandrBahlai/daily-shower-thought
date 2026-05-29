export async function onRequest(context) {
  const thoughtData = {
    thought: "The brain named itself."
  };

  return Response.json(thoughtData);
}
