  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    
    // 🟢 FORMSPREE FLAT PAYLOAD: Formspree requires a completely flat key-value structure
    const flatPayload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      // 🟢 EXPLICIT URL: Ensure your real 8-character ID is pasted cleanly here without trailing slashes
      const response = await fetch("mlgyddor", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(flatPayload) // Sends a clean flat string structure
      })

      if (response.ok) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      } else {
        // Handle server-side errors returned by Formspree gracefully
        const errData = await response.json().catch(() => ({ error: "Formspree submission rejected." }))
        throw new Error(errData.error || "Gateway validation error.")
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network transmission error. Please try again.")
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }
