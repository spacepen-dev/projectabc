export function SaveToken(data) {
localStorage.setItem('user_token', JSON.stringify(data));
}


export function Token() {
    const token = JSON.parse(localStorage.getItem('user_token'))
    if (!token) return null;
    return token;
}

export function getBankList() {
    const bank = JSON.parse(localStorage.getItem('BankList'))
    if (!bank) return null;
    return bank;
}