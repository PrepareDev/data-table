export class APIService {

    private readonly BASE_URL = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    private page = 1
    /**
     * fetchData
     */
    async fetchData() {
        const res = await fetch(this.BASE_URL)
        return res.json()
    }

    async nextPage() {
        const res = await fetch(this.BASE_URL.concat(`&page={${this.page += 1}}`))
        return res.json()
    }

    async prevPage() {
        const res = await fetch(this.BASE_URL.concat(`&page={${this.page -= 1}}`))
        return res.json()
    }

}