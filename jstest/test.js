"use strict";var __outbuf='';function printLine(n){let i=0;while(i<n){__outbuf+="-";i=i+1};__outbuf+="";console.log(__outbuf);__outbuf='';return(true)};function printMap(n){__outbuf+="|  ";if(n<100){__outbuf+=" "}else{;};__outbuf+=n;__outbuf+=" = ";__outbuf+=chr(n);__outbuf+="  |";console.log(__outbuf);__outbuf='';return(true)}function __main(){__outbuf+="Asci character lookup table:";console.log(__outbuf);__outbuf='';let r=printLine(13);let num=ord(" ");while(num<127){r=printMap(num);num=num+1};r=printLine(13)};function ord(c){return(c.charCodeAt(0))};function chr(n){return(String.fromCharCode(n))};__main();if(__outbuf.length>0){console.log(__outbuf)}