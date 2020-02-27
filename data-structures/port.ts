/**
 * Representation of a valid internet port number
 */
export class Port {
    private port : number;

    constructor(port : number) {
        if (!this.valid(port)) {
            throw new Error("Cannot instantiate port; invalid port number");
        }
        this.port = port;
    }

    /**
     * Returns port number as int
     * @return port number
     */
    public asNumber() : number {
        return this.port;
    }

    /**
     * valid - check if port is valid => 1 - 2^16 - 1
     */
    private valid(port : number) : boolean {
        return port >= 1 && port <= 65535;
    }
}