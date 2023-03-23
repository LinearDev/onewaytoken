### LIST OF FUNCTIONS
    use (key: string) => {error: boolean, message: string}

    check (key: string) => boolean

    create () => string

### HOW TO USE
use(key)   - is used to delete generated SHA256 key from store
check(key) - is used to check if such a token exists
create()   - is used to create a SHA256 key