
# Firewall.js

pre-proposal: https://docs.google.com/document/d/1qZHGRjGJnaaR7hdN1Jjn0nC0XZUsuuYuswxjrL0eokQ/edit?usp=sharing

proposal: https://docs.google.com/document/d/1slcN3UAlQBazu08bR65SZAWKth8lfl2C1xBTbRvYQV4/edit?usp=sharing

design doc: https://docs.google.com/document/d/1NhdTYndz0NLY7iVuK7b8Tv4fAWPad5Tda5nbisIG6-g/edit?usp=sharing

Report: https://docs.google.com/document/d/1no_vyD-LfvIblI4pFSoaCIlvwhNBPsSaz1XsuNLREQw/edit?usp=sharing

Video demo (icmp forward, audio) https://drive.google.com/file/d/1DhIc79DbwGVKBv5JfWlWF5VE-PpzGfOk/view?usp=sharing

Video demo (DNS- no audio): https://drive.google.com/file/d/1BdO1yaL8SBR4az4dmHnWLLY_-LkF38Ju/view?usp=sharing

Slides : https://docs.google.com/presentation/d/1xuW_J2CJ_x-VBtLW6A6BO9FAXgOxgYaD1gAE_Mz2cJc/edit?usp=sharing


Instructions:

    Instantiate a new device with its ip address (local). You will need a linux kernel for any of this to work, since it depends on the netfilter linux library in C. 

    Once you run npm i && npm run build, you can just run the generated js file to generate C code, with
    generate('filename.c'), or you can bypass this and load the compiled module into the kernel using
    the static function Device.deploy(nameOfJsObject);

    See test/driver.ts for example code.
