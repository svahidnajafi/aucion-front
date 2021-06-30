export function priceOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

export function weightOnly(event: any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode === 46) {
            return true;
        }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
}
