export const slep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getCookie = (name: string): string | null => {
    const search = `; ${name}=`;
    let res = document.cookie.split(search);
    if (res.length < 2) {
        return null;
    } else return (res.pop() ?? "").split(';')[0];
}