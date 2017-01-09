class CLoader {
    private count : number = 0;

    add () {
        return this.count++;
    }
    remove () {
        if (!this.isLoading()) {
            return this.count;
        }
        return this.count--;
    }

    isLoading () {
        return this.count !== 0;
    }
}


// creating a singleton
let Loader = new CLoader();
export { Loader };
