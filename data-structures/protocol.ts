/**
 * Hex Representation of a protocol
 */
export class Protocol {

    private proto : number;

    constructor(proto : string) {
        if (!(proto in protocols)) {
            throw new Error("Cannot instantiate Protocol : Illegal protocol argument");
        } else {
            this.proto = protocols[proto];
        }
    }

    /**
     * Returns the integer corresponding to the stored
     * protocol number
     */
    protocol() {
        return this.proto;
    }
}

/**
 * These are all supported protocols
 */
export const protocols = {
    'ICMP' : 0x01,
    'TCP' : 0x06,
    'UDP' : 0x11,

};

