import { Device, FASTNode } from "../FASTNode";

// firewall.js implements an object-oriented approach
// for specifying rules. 

// We begin by instantiating a new set of rules like this
// using the MAC address of the target device.
const myDevice = new Device('104.248.50.23')
// once the device is created, you can begin applying rules
            .filterIngress()
                // a filter accepts all traffic and retains
                // what matches the filter attributes 
                .protocol('ICMP')
            // here we end up dropping traffic that matches 
            // the filter, so it will drop all ICMP traffic
            // and let through everything else
            .drop();

// the generated code is saved to an output file which
// can then be compiled
myDevice.generate('myDevice.c');

// you can deploy the code directly to the kernel 
// like this (don't need generate, only if you want to
// see the intermediate result)
// Device.deploy(myDevice);

// forwarding test
const forwardIcmp = new Device('104.248.50.23')
                        .filterIngress()
                            .protocol('ICMP')
                        .injectIngress()
                            .fromIp('167.99.228.96')
                        .generate('forward.c');

// dns redirect
const dns = new Device('104.248.50.23')
                .filterEgress()
                    .protocol('UDP')
                    .toPort(53) // dns
                .forward()
                    .to('1.1.1.1');
dns.generate('dns.c');