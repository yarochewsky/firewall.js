
# Firewall.js


Instructions:

    Instantiate a new device with its ip address (local). You will need a linux kernel for any of this to work, since it depends on the netfilter linux library in C. 

    Once you run npm i && npm run build, you can just run the generated js file to generate C code, with
    generate('filename.c'), or you can bypass this and load the compiled module into the kernel using
    the static function Device.deploy(nameOfJsObject);

    See test/driver.ts for example code.
