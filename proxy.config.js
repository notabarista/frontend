const PROXY_CONFIG = [
    {
        context: [
            // add all backend relative paths in here
            "/user-management",
            "/authenticate"
        ],
        target: "http://localhost:18080",
        secure: false,
        logLevel: "debug",
    }
]

module.exports = PROXY_CONFIG;