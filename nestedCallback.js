function getChicken(chicken) {
    return function cookChicken() {
        let cookedChicken = `Cooked ${chicken}`;
        return function getBun(bun) {
            return function putTogether() {
                let burger = `${bun} ${cookedChicken} ${bun}`;
                return function serve() {
                    return `Hot ${burger}`
                }
            }
        }
    }
}

console.log(getChicken("chicken")()("bun")()());