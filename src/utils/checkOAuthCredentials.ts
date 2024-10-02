export const checkOAuthCredentials = async (email: string, provider: string) => {
    const res = await fetch("http://localhost:5000/oauth-login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ email, provider }),
        cache: "no-store"
    })
    const data = await res.json()
    console.log(data)
    if (res.status == 200) {
        return { valid: true }
    } else {
        return { valid: false, message: (data as any).message }
    }
}