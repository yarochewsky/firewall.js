/**
 * Representation of an IPv4 address as an integer.
 */
export class Ipv4 {

    private ip : string;

    constructor(ip : string) {
        if (!this.valid(ip)) {
            throw new Error("Cannot Instantiate IP address : invalid string format");
        }
        this.ip = ip;
    }

    /**
     * Returns string quad representation of ip address
     * @return {string} quad as string
     */
    public asQuad() : string {
        return this.ip;
    }

    /**
     *  Returns the ip stored
     * @returns {number} ip address as integer
     */
    public asNumber() : number {
        return this.ip2int(this.ip);
    }

    /**
     * Parses an ip address as string using dot notation,
     * converting to an integer
     *  --> Source: https://gist.github.com/jppommet/5708697
     * @param ip string with ip address as dot notation
     */
    private ip2int(ip) {
        return ip.split('.').reduce((ipInt, octet) => {
            return (ipInt << 8) + parseInt(octet, 10);
        }
        ) >>> 0;
    }

    /**
     * Converts an ip address number to array of quad
     * --> Source: https://stackoverflow.com/questions/9283093/javascript-equivalent-to-htonl
     * @param ip ip number to be converted
     */
    private htonl(ip: number) {
        return [
            (ip & 0xFF000000) >>> 24,
            (ip & 0x00FF0000) >>> 16,
            (ip & 0x0000FF00) >>>  8,
            (ip & 0x000000FF) >>>  0,
        ];
    }

    private ntohl(ip : number) {
        return ((ip & 0xFF) << 24)
               | ((ip & 0xFF00) << 8)
               | ((ip >> 8) & 0xFF00)
               | ((ip >> 24) & 0xFF);
    }

    /**
     * Checks that it's a valid ipv4 string
     * @param ip {string} : ip string to check against
     * @return {boolean} : whether or not ip is valid
     */
    private valid(ip: string) : boolean {
        const pattern = new RegExp(['^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)',
                                    '{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'].join(''));
        return pattern.test(ip);
    }
}