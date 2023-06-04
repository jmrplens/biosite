    // Generate a new random nonce value for every response.
    const nonce = crypto.randomBytes(16).toString("base64");
    // Set the strict nonce-based CSP response header
    const csp = `script-src 'nonce-${nonce}' 'strict-dynamic' https: static.cloudflareinsights.com; connect-src cloudflareinsights.com; object-src 'none'; base-uri 'none';`;
    response.set("Content-Security-Policy", csp);
