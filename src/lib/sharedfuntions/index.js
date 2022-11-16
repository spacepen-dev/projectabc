export function SaveToken(data) {
localStorage.setItem('aimienpay_user_token', JSON.stringify(data));
}

export function SavedBusinessToken(data) {
localStorage.setItem('aimienpay_business_token', JSON.stringify(data));
}



export function Token() {
    const token = JSON.parse(localStorage.getItem('aimienpay_user_token'))
    if (!token) return null;
    return token;
}
export function getBusinessToken() {
    const token = JSON.parse(localStorage.getItem('aimienpay_business_token'))
    if (!token) return null;
    return token;
}

export function getBankList() {
    const bank = JSON.parse(localStorage.getItem('BankList'))
    if (!bank) return null;
    return bank;
}