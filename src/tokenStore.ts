type useType = {
    error: boolean
    message: string
}

class Store {
    private items: string[] = []

    set(key :string) {
        this.items.push(key);
    }

    checkKey(key: string): boolean {
        return this.items.includes(key);
    }

    use(key: string): useType {
        if(this.checkKey(key)) {
            const index = this.items.indexOf(key);
            this.items.splice(index, 1);
            return {error: false, message: "OnewayToken: Key used"}
        }
        return {error: true, message: "OnewayToken: Key not exist"}
    }
}

const store = new Store();

export const set = (key: string) => {return store.set(key)}
export const use = (key: string) => {return store.use(key)}
export const checkKey = (key: string) => {return store.checkKey(key)}