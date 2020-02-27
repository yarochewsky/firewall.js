/**
 * Representation of a MAC address
 */
export class MAC {
    private mac : string;

    constructor(mac : string) {
        if (!this.valid(mac)) {
            throw new Error(`Cannot instantiate invalid MAC address ${mac}`);
        } else {
            this.mac = mac;
        }
    }

    /**
     * Returns string MAC address
     */
    toString() {
        return this.mac;
    }

    /**
     * Checks whether MAC address is valid
     * @param mac {string} : target MAC address to check validity of
     * @return {boolean} true if MAC is valid, false otherwise.
     */
    valid(mac: string) : boolean {
        return new RegExp('^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$').test(mac);
    }
}